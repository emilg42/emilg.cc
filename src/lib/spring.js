/**
 * Tiny spring animation reproducing react-spring's physics and frame loop
 * (semi-implicit Euler in 1ms steps, same rest/precision rules), so motion
 * matches the original site. A spring animates an array of numbers and calls
 * render(values) every frame.
 *
 * With { progress: true } the values behave like react-spring's string values
 * (e.g. '12px', 'rotate(40deg)'): each move animates a 0 → 1 progress from the
 * current value to the target, so a new target restarts the progress from the
 * current value while carrying over the velocity in progress units.
 */

const running = new Set();
let ts = -1; // time of the last frame, -1 while idle

function frame() {
  const prev = ts;
  ts = performance.now();
  // a loop starting from idle advances one nominal frame
  const dt = prev ? Math.min(64, ts - prev) : 16.667;
  running.forEach((advance) => advance(dt) || running.delete(advance));
  if (running.size) requestAnimationFrame(frame);
  else ts = -1;
}

export function spring({ mass, tension, friction }, initial, render, { progress = false } = {}) {
  const values = [...initial];
  const target = [...initial];
  const start = [...initial]; // value where the current progress began
  const x = initial.map((value) => (progress ? 1 : value)); // integrated position
  const from = [...x];
  const v = initial.map(() => 0);
  const done = initial.map(() => true);

  const advance = (dt) => {
    values.forEach((_, i) => {
      if (done[i]) return;
      const to = progress ? 1 : target[i];
      const precision = from[i] === to ? 0.005 : Math.min(1, Math.abs(to - from[i]) * 0.001);

      for (let n = 0; n < Math.ceil(dt); n++) {
        if (Math.abs(v[i]) <= precision / 10 && Math.abs(to - x[i]) <= precision) {
          done[i] = true;
          x[i] = to;
          v[i] = 0;
          break;
        }
        v[i] += (-tension * 1e-6 * (x[i] - to) - friction * 1e-3 * v[i]) / mass;
        x[i] += v[i];
      }

      values[i] = progress ? start[i] + (target[i] - start[i]) * x[i] : x[i];
    });

    render(values);
    return done.includes(false);
  };

  return {
    // jump to values without animating
    set(next) {
      next.forEach((value, i) => {
        values[i] = target[i] = start[i] = value;
        x[i] = from[i] = progress ? 1 : value;
        v[i] = 0;
        done[i] = true;
      });
      running.delete(advance);
      render(values);
    },

    // animate towards values; unchanged targets keep their current motion
    to(next) {
      next.forEach((value, i) => {
        if (value === target[i]) return;
        if (done[i]) v[i] = 0;
        if (progress) {
          start[i] = values[i];
          x[i] = 0;
        }
        from[i] = x[i];
        target[i] = value;
        done[i] = false;
      });

      if (done.includes(false) && !running.has(advance)) {
        running.add(advance);
        if (ts < 0) {
          ts = 0;
          requestAnimationFrame(frame);
        }
      }
    },
  };
}
