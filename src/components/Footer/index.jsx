import styled from "styled-components";
import BranchIcon from 'public/icons/branch.svg'

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0 15px;
  line-height: 20px;
  font-size: 14px;
  font-family: 'SFMono';
  color: ${({ theme }) => theme.primary_border_color};
  transition: 0.3s ease-in;

  svg {
    transform: translateY(3px);
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.blend_3_theme_color};
  }
`
const Link = styled.a`
  text-decoration: none;
`

/**
 * Simple Footer displaying versioning, links and legal notice.
 */
const Footer = () => {
  return (
    <Link href='https://github.com/emilg42/emilg.cc' target='_blank'>
      <Container>
        <p>designed and built by emilg</p>
        <p>{new Date().getFullYear()} &gt; source <BranchIcon/></p>
      </Container>
    </Link>
  )
}

export default Footer