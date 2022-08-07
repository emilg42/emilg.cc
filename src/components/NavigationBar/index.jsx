import { useState, useEffect, useRef } from "react";
import { useSpring, animated as a } from '@react-spring/web';
import styled from "styled-components"
import NavigationButton from "./NavigationButton"
import ThemeToggle from "./ThemeToggle"
import Logo from "./Logo"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0 20px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85vw;
`

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

// initial metrics for SSR
const BASE = { x: 0, y: 0, w: 0, h: 0 }

// extract relevant button properties
const getMetrics = (target) => {
  const { offsetLeft: x, offsetTop: y,
    offsetWidth: w, offsetHeight: h } = target;
  return {x, y, w, h};
}


/**
 * Navigation Bar, which allows switching between various pages
 * and sections of the app.
 */
const NavigationBar = () => {

  // state handling
  const [prev, setPrev] = useState(BASE)
  const [current, setCurrent] = useState(BASE)
  const initial = useRef()

  // initial alignment @ spawn
  useEffect(() => {
    alignWithInitial();
  }, [initial.current])

  // event handler
  useEffect(() => {
    window.addEventListener('resize', alignWithInitial);
    return () => {
      window.removeEventListener('resize', alignWithInitial);
    }
  }, [])

  // react-spring configuration
  const springProps = useSpring({
    from: {
      left: `${prev.x}px`,
      top: `${prev.y}px`,
      width: `${prev.w}px`,
      height: `${prev.h}px`
    },
    to: {
      left: `${current.x}px`,
      top: `${current.y}px`,
      width: `${current.w}px`,
      height: `${current.h}px`
    },
    config: { mass: 2, tension: 300, friction: 35 }
  })

  // change position and size of indicator
  const update = (target) => {
    setPrev(current);
    setCurrent(getMetrics(target));
  }

  // align indicator with first button
  const alignWithInitial = () => {
    const selected = getMetrics(initial.current);
    setPrev(selected);
    setCurrent(selected);
  }

  return (
    <Wrapper>
      <Container>
        <Logo/>
        <Navigation>

          {/* Indicator */}
          <a.div style={springProps} className={'indicator'}/>

          {/* Buttons */}
          <NavigationButton key={0} title={'About'} update={update} initial={initial}/>
          <NavigationButton key={1} title={'Projects'} update={update}/>
          <NavigationButton key={2} title={'Services'} update={update}/>
          <NavigationButton key={3} title={'Blog'} update={update}/>

          {/* Light/Darkmode Toggle */}
          <ThemeToggle/>

        </Navigation>
      </Container>
    </Wrapper>
  )
}

export default NavigationBar