import { NavigationBar, SocialMenu, Footer, PageDivider } from '../components/bundle'
import styled from 'styled-components'
import Head from 'next/head'

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
`

const Wrapper = styled.div`
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

        <PageDivider position={'top'}/>
        <PageDivider position={'bottom'}/>


        {/* Content Frame */}
        <Wrapper>
          <NavigationBar/>
          {/* TEMP SPACER */} <div style={{ width: '100%', height: '2000px'}}></div>
          <Footer/>
        </Wrapper>

        {/* Social Icons @ bottom left */}
        <SocialMenu/>
      </Container>
    </>
  )
}

export default Home
