import { NavigationBar, SocialMenu } from '../components/bundle'
import styled from 'styled-components'
import Head from 'next/head'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrapper>
        <NavigationBar/>
      </Wrapper>
      <SocialMenu/>
    </>
  )
}

export default Home
