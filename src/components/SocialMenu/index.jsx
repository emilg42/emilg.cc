import styled from "styled-components"
import SocialButton from "./SocialButton"

const Container = styled.ul`
  position: fixed;
  bottom: 0;
  left: 40px;
  width: 40px;
  z-index: 10;
`

/**
 * List of socials, rendered at the bottom left of the page.
 */
const SocialMenu = () => {
  return (
    <>
      <Container>
        <SocialButton icon={'github'} url={'https://www.github.com/emilg42'}/>
        <SocialButton icon={'twitter'} url={'https://www.twitter.com/lightbluecrab'}/>
        <SocialButton icon={'instagram'} url={'https://www.instagram.com'}/>
        <SocialButton icon={'mail'} url={'mailto: contact@emilg.cc'}/>
      </Container>
    </>
  )
}

export default SocialMenu