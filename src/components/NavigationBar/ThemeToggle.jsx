import { useSpring, animated } from '@react-spring/web';
import { useTheme } from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../pages/_app'
import styled from "styled-components"


const Container = styled.div`
  display: inline-block;
  padding: 5px 20px 0 20px;
`

/**
 * Button to toggle between light and dark theme. Animation
 * consists of moon and sun to indicate the active theme.
 */
const ThemeToggle = () => {

  // theme states
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();

  const properties = {
    moon: {
      r: 8,
      transform: 'rotate(40deg)',
      cx: 12,
      cy: 4,
      opacity: 0
    },
    sun: {
      r: 5,
      transform: 'rotate(90deg)',
      cx: 30,
      cy: 0,
      opacity: 1
    },
    springConfig: { mass: 5, tension: 250, friction: 35 }
  };
  const { r, transform, cx, cy, opacity } = isDarkTheme
    ? properties['moon']
    : properties['sun'];

  // spring config
  const svgContainerProps = useSpring({ transform, config: properties.springConfig });
  const centerCircleProps = useSpring({ r, config: properties.springConfig });
  const maskedCircleProps = useSpring({ cx, cy, config: properties.springConfig });
  const linesProps = useSpring({ opacity, config: properties.springConfig });

  return (
    <Container>
      <animated.svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        stroke={theme.primary_text_color}
        style={{ ...svgContainerProps, cursor: 'pointer' }}
        onClick={() => toggleTheme() }
      >
        <mask id='mask'>
          <rect x='0' y='0' width='100%' height='100%' fill='white' />
          <animated.circle
            style={maskedCircleProps}
            cx='12'
            cy='4'
            r='9'
            fill='black'
          />
        </mask>
        <animated.circle
          style={centerCircleProps}
          fill={theme.primary_text_color}
          cx='12'
          cy='12'
          r='9'
          mask='url(#mask)'
        />

        <animated.g style={linesProps} fill='currentColor'>
          <line x1='12' y1='1' x2='12' y2='3' />
          <line x1='12' y1='21' x2='12' y2='23' />
          <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
          <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
          <line x1='1' y1='12' x2='3' y2='12' />
          <line x1='21' y1='12' x2='23' y2='12' />
          <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
          <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
        </animated.g>
      </animated.svg>
    </Container>
  )
}

export default ThemeToggle