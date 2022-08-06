import styled from "styled-components"
import { useState } from "react"
import NavigationButton from "./NavigationButton"
import ThemeToggle from "./ThemeToggle"
import Logo from "./Logo"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

/**
 * Navigation Bar, which allows switching between various pages
 * and sections of the app.
 */
const NavigationBar = () => {

  const [x, sX] = useState();
  const [y, sY] = useState();
  const [w, sW] = useState();

  return (
    <>
      <Container>
        <Logo/>
        <p>x: {x} / y: {y} / w: {w}</p>
        <Navigation>
          <NavigationButton key={0} title={'About'}
             setX={setX} setY={setY} setW={setW}/>

          <NavigationButton key={1} title={'Projects'}/>
          <NavigationButton key={2} title={'Services'}/>
          <NavigationButton key={3} title={'Blog'}/>
          <ThemeToggle/>
        </Navigation>
      </Container>
    </>
  )
}

export default NavigationBar