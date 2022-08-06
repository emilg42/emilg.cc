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

/**
 * Navigation Bar, which allows switching between various pages
 * and sections of the app.
 */
const NavigationBar = () => {
  return (
    <Wrapper>
      <Container>
        <Logo/>
        <Navigation>
          <NavigationButton key={0} title={'About'}/>
          <NavigationButton key={1} title={'Projects'}/>
          <NavigationButton key={2} title={'Services'}/>
          <NavigationButton key={3} title={'Blog'}/>
          <ThemeToggle/>
        </Navigation>
      </Container>
    </Wrapper>
  )
}

export default NavigationBar