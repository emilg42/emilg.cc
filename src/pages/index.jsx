import styled from 'styled-components'
import Head from 'next/head'
import { NavigationBar, SocialMenu, Footer,
         PageDivider, ScrollButton
} from '../components/bundle'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: ${({ theme }) => theme.primary_bg_color};
  margin: 0;
`

const Content = styled.div`
  width: 80vw;
`

/**
 * Landing page of website. Layout consists of 4 functional sections:
 *  1. Header (independent)
 *  2. Content (max width)
 *  3. Footer (independent)
 *  4* <individual components> (ind. width and pos.)
 *
 * @returns
 */
const Home = () => {
  return (
    <>
      {/* Preferences */}
      <Head>
        <title>Home</title>
      </Head>

      {/* Header (1) */}
      <NavigationBar/>

      {/* Content (2) */}
      <Wrapper>
        <Content>
          <div style={{width: '100%', height: '1000px'}}></div>
        </Content>

        {/* Waves */}
        <PageDivider pos={'top'}/>
        <PageDivider pos={'bottom'}/>

      </Wrapper>

      {/* Footer (3) */}
      <Footer/>

      {/* Individual (4) */}
      <SocialMenu/>
      <ScrollButton/>
    </>
  )
}

export default Home
