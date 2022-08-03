import styled from "styled-components"
import NavigationButton from "./NavigationButton"
import ThemeToggle from "./ThemeToggle"
import Logo from "./Logo"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
`

/**
 * Navigation Bar, which allows switching between various pages
 * and sections of the app.
 */
const NavigationBar = () => {
  return (
    <>
      <Container>
        <Logo/>
        <div>
          <NavigationButton title={'About'}/>
          <NavigationButton title={'Projects'}/>
          <NavigationButton title={'Services'}/>
          <NavigationButton title={'Blog'}/>
        </div>
      </Container>
      <ThemeToggle/>
    </>
  )
}

export default NavigationBar