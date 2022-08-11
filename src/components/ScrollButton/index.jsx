import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArrowIcon from 'public/icons/arrow.svg'

const THRESHOLD = 100;

const Button = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: ${({ theme }) => theme.primary_border_color};
  transition: .2s ease-in;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.blend_3_theme_color};
    transform: translateY(-3px);
  }
`

const scrollToTop = () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * SVG Button, which scrolls back to the page header.
 */
const ScrollButton = () => {

  const [scrollY, setScrollY] = useState(0);
  function updateScroll() { setScrollY(window.pageYOffset); }

  // attach handler
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  });

  return (
    <>
      { (scrollY >= THRESHOLD) &&
        <Button onClick={scrollToTop}>
          <ArrowIcon/>
        </Button>
      }
    </>
  )
}



export default ScrollButton