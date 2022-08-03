import { createGlobalStyle } from 'styled-components';

/*
 * Global styling applied to all components within the app.
 */
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html { font-size: 100% }
  
  body {
    background: ${({ theme }) => theme.body};
  }

  @font-face {
    font-family: Ubuntu;
    src: url('/fonts/Ubuntu.ttf');
  }

  @font-face {
    font-family: Cantarell;
    src: url('/fonts/Cantarell.ttf');
  }
`

const light = {
  body: '#FFF',
  text: '#363537',
  border: '#FFF'
}

const dark = {
  body: '#23252f',
  text: '#f5f6ef',
  border: '#3b3a51'
}

export { GlobalStyle, light, dark }
