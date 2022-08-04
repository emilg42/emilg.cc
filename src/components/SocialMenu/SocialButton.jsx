import styled from "styled-components"

const Container = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 40px;
  height: 40px;
  background-color: red;
`

/**
 * SVG Button, which redirects to given social media account.
 */
const SocialButton = ({ icon, url }) => {
  return (
    <a>
      <Container>
        <object type="image/svg+xml" data={`/icons/${icon}.svg`}></object>
      </Container>
    </a>
  )
}

export default SocialButton