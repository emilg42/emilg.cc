import Image from "next/image";
import styled from "styled-components";
import TypeWriter from "./Typewriter";
import LinkIcon from 'public/icons/link.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Content = styled.div`
  position: relative;
  width: 75%;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 30px;
  height: 300px;
  font-size: 30px;
  font-family: 'Ubuntu';
  border-radius: 20px;
  user-select: none;
  background-color: ${({ theme }) => theme.secondary_bg_color };
  border: 2px solid ${({ theme }) => theme.tertiary_bg_color };
  color: ${({ theme }) => theme.primary_text_color};
`

const Casket = styled.div`
  display: flex;
  align-items: center;
  ${({ dir }) => dir === 'end' && `justify-content: flex-end;`}
`

const Overlay = styled.p`
  position: absolute;
  right: 25px;
  bottom: 20px;
  font-size: 14px;
  font-family: 'SFMono';
  color: ${({ theme }) => theme.primary_border_color };

  svg {
    transform: translateY(3px);
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.blend_3_theme_color};
  }
`


/**
 * Animated 'About' section of website.
 */
const About = () => {
  return (
    <Wrapper>
      <Content>
        <Container>
          {/* left section (image) */}
          <Casket dir={'end'}>
            <Image
            src = '/m1.png'
            width = { 250 }
            height = { 250 }
          />
          </Casket>

          {/* right section (typography) */}
          <Casket>
            <TypeWriter/>
          </Casket>
        </Container>
        <Overlay>
          read more <LinkIcon/>
        </Overlay>
      </Content>
    </Wrapper>
  )
}

export default About