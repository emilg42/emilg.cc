import { NavigationBar, SocialMenu, Footer } from '../components/bundle'
import styled from 'styled-components'
import Head from 'next/head'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80vw;
`

const Home = () => {
  return (
    <>
      {/* Page Title */}
      <Head>
        <title>Home</title>
      </Head>

      {/* Body */}
      <Container>

        {/* Centered Content */}
        <Wrapper>
          <NavigationBar/>
          <Footer/>
        </Wrapper>

        {/* Social Icons @ bottom left */}
        <SocialMenu/>
      </Container>
    </>
  )
}

export default Home
