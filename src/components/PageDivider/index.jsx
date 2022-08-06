import styled from "styled-components"

// generated using https://www.shapedivider.app
const ShapeDivider = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: ${({position}) => position === 'bottom' ? 'rotate: 0' : 'rotate(180deg)' };
  ${({ position }) => position === 'bottom' && `bottom: 0; `}
  left: 0;
  z-index: -1;

  svg {
    position: relative;
    display: block;
    width: calc(135% + 1.3px);
    height: 130px;
  }

  .shape-fill {
    fill: #1d1e25;
  }
`

/**
 * Horizontal shape divider(s) (~ wave) for body/sections of the page.
 */
const PageDivider = ({ position }) => {
  return (
    <ShapeDivider position={position}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
    </ShapeDivider>
  )
}



export default PageDivider