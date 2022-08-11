import Image from 'next/image'
import styled from 'styled-components'
import MainLogo from 'public/icons/logo_extended.svg'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 60px;
    fill: ${({ theme }) => theme.primary_text_color };
  }

  &:hover {
    cursor: pointer;
  }
`

const Logo = () => {
  return (
    <Container>
      <MainLogo/>
    </Container>
  )
}

export default Logo