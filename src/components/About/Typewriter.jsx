import styled from "styled-components"
import { useRef, useEffect, useState } from "react";
import Typed from "typed.js";

const Terminal = styled.div`
  margin: 10px 0;
  ${({ vis }) => !vis && `visibility: hidden;`}
  .typed-cursor {
    ${({ cur }) => !cur && `display: none;`}
    color: ${({ theme }) => theme.blend_2_theme_color };
  }
`

const Line = styled.span`
  cursor: default;
`

const Prompt = styled.span`
  color: ${({ theme }) => theme.blend_2_theme_color };
`

/**
 * Multiline typewriter animation using typed.js
 */
const TypeWriter = ({ icon, url }) => {

  // state handling
	const l1 = useRef(null);
  const l2 = useRef(null);
	const t1 = useRef(null);
  const t2 = useRef(null);
  const [vis, setVis] = useState(false);

  // common options
  const opts = {
    showCursor: true,
    cursorChar: '&nbsp;▌'
  }

  // line 1
  const o1 = {
    strings: ['Hi, my name is Emil &#128075; ^900'],
    typeSpeed: 50,
    onComplete: () => {
      t1.current.stop();
      t2.current.start();
      setVis(true);
    },
    ...opts
  };

  // line 2
  const o2 = {
    strings: [
      'I develop <i>software.</i>',
      'I build <i>things.</i>'
    ],
    typeSpeed: 90,
    backSpeed: 30,
    loop: true,
    ...opts
  }

  // exec animation on mount
  useEffect(() => {

    t1.current = new Typed(l1.current, o1);
    t2.current = new Typed(l2.current, o2);
    t2.current.stop();

    return () => {
      t1.current.destroy();
      t2.current.destroy();
    }
  }, [])

  return (
    <div>
      {/* line 1 */}
      <Terminal vis={true} cur={!vis}>
        <Prompt>~ $&nbsp;</Prompt>
        <Line ref={l1}/>
      </Terminal>
      {/* line 2 */}
      <Terminal vis={vis} cur={true}>
        <Prompt>~ $&nbsp;</Prompt>
        <Line ref={l2}/>
      </Terminal>
    </div>
  )
}

export default TypeWriter