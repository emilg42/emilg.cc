/**
 * Typewriter for [data-typed]: a single line is typed once on load, several
 * lines are cycled like a terminal (wait, delete, type the next). The first
 * line is in the HTML, so the page works without JavaScript.
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

const type = async (el, line) => {
  for (let n = 1; n <= line.length; n++) {
    el.textContent = line.slice(0, n);
    await sleep(75);
  }
};

document.querySelectorAll('[data-typed]').forEach(async (el) => {
  const lines = JSON.parse(el.dataset.typed);

  if (lines.length === 1) {
    if (!still) el.textContent = '';
    el.classList.remove('pending');
    if (still) return;
    await sleep(700);
    return type(el, lines[0]);
  }
  if (still) return;

  for (let i = 0; ; i = (i + 1) % lines.length) {
    await sleep(2400);
    for (let n = lines[i].length - 1; n >= 0; n--) {
      el.textContent = lines[i].slice(0, n);
      await sleep(32);
    }
    await sleep(300);
    await type(el, lines[(i + 1) % lines.length]);
  }
});
