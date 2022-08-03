import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.span`
  color: lightblue;
  font-size: 20px;
`

const Logo = () => {
  return (
    <Container>
      <Image
        src = '/m1.png'
        width = {50}
        height = {50}
      />
      <Title>emilg</Title>
    </Container>
  )
} 

export default Logo