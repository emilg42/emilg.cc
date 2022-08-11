import styled from "styled-components"
import SocialButton from "./SocialButton"
import GitHubIcon from 'public/icons/github.svg'
import TwitterIcon from 'public/icons/twitter.svg'
import InstagramIcon from 'public/icons/instagram.svg'
import MailIcon from 'public/icons/mail.svg'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 30px;
  width: 40px;
  z-index: 10;
  text-align: center;
`

const Divider = styled.div`
  display: inline-block;
  width: 2px;
  height: 100px;
  margin: 12px 0 12px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.primary_border_color};
`

/**
 * List of socials, rendered at the bottom left of the page.
 */
const SocialMenu = () => {
  return (
    <Container>
      {/* Buttons */}
      <SocialButton icon={<GitHubIcon/>} url={'https://www.github.com/emilg42'}/>
      <SocialButton icon={<TwitterIcon/>} url={'https://twitter.com/emilg42'}/>
      <SocialButton icon={<InstagramIcon/>} url={'https://www.instagram.com/emil.g42'}/>
      <SocialButton icon={<MailIcon/>} url={'mailto: contact@emilg.cc'}/>

      {/* Vertical Line */}
      <Divider/>
    </Container>
  )
}

export default SocialMenu