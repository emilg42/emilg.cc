import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 5px 0;
  color: ${({ theme }) => theme.primary_border};
  transition: .2s ease-in;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.blend_6_theme_color};
    transform: translateY(-3px);
  }
`

/**
 * SVG Button, which redirects to given social media account.
 */
const SocialButton = ({ icon, url }) => {
  return (
    <a href={url} target='_blank'>
      <Container>
        { icon }
      </Container>
    </a>
  )
}

export default SocialButton