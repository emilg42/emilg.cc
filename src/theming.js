import css from 'styled-jsx/css';
import { createGlobalStyle } from 'styled-components';

/**
 * Dark theme prototype ~ utilized by styled-components.
 */
const dark = {

  // theme colors
  primary_theme_color: '#324F8C',

  blend_1_theme_color: '#3a2f6b',
  blend_2_theme_color: '#36669c',
  blend_3_theme_color: '#41a0ae',
  blend_4_theme_color: '#3ec995',
  blend_5_theme_color: '#77f07f',

  // typography colors
  primary_text_color: '#f5f6ef',

  // background colors
  primary_bg_color:   '#23252f',
  secondary_bg_color: '#1d1e25',
  tertiary_bg_color:  '#121214',

  // border colors
  primary_border_color:   '#8892b0',

}

/**
 * Light theme prototype ~ utilized by styled-components.
 */
const light = {

  // theme colors
  primary_theme_color: '#324F8C',

  blend_1_theme_color: '#3a2f6b',
  blend_2_theme_color: '#36669c',
  blend_3_theme_color: '#41a0ae',
  blend_4_theme_color: '#3ec995',
  blend_5_theme_color: '#77f07f',

  // typography colors
  primary_text_color: '#363537',

  // background colors
  primary_bg_color:   '#ffffff',
  secondary_bg_color: '#f2eded',
  tertiary_bg_color:  '#ccc8c8',

  // border colors
  primary_border_color: '#8892b0',

}


/**
 * Globally used fonts ~ served as static assets.
 */
const fonts = css`
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
    background: ${({ theme }) => theme.secondary_bg_color};
  }

  ${fonts}
`

export { GlobalStyle, light, dark }
