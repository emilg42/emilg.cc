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

  html {
    font-size: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  body {
    background: ${({ theme }) => theme.body};
  }

  @font-face {
    font-family: Ubuntu;
    src: url('/fonts/Ubuntu.ttf');
  }

  @font-face {
    font-family: SFMono;
    src: url('/fonts/SFMono.otf');
  }

  @font-face {
    font-family: Cantarell;
    src: url('/fonts/Cantarell.ttf');
  }
`

const light = {
  body: '#FFF',
  text: '#363537',

  // box colors
  primary_border: '#8892b0',
  secondary_border: '#1A1C23',

  // theme colors
  primary_theme_color: '#324F8C',
  blend_4_theme_color: '#326498',
  blend_5_theme_color: '#327AA3',
  blend_6_theme_color: '#3190AF'
}

const dark = {
  body: '#23252f',
  text: '#f5f6ef',

  // box colors
  primary_border: '#8892b0',
  secondary_border: '#1A1C23',

  // theme colors
  primary_theme_color: '#324F8C',
  blend_4_theme_color: '#326498',
  blend_5_theme_color: '#327AA3',
  blend_6_theme_color: '#3190AF'
}

export { GlobalStyle, light, dark }
