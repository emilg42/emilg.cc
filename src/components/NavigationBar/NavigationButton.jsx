import { useEffect, useRef } from "react"
import styled from 'styled-components'


const Button = styled.button`
  margin: 0 10px;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 10px;
  font-weight: 600;
  font-family: 'Cantarell';
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  &:hover {
    background-color: ${({ theme }) => theme.secondary_border};
  }
`

const NavigationButton = ({ title }) => {

  // state handling
  const ref = useRef();

  // // fetch position and width
  // const fetchMetrics = () => {
  //   setX(ref.current.offsetLeft);
  //   setY(ref.current.offsetTop);
  //   setW(ref.current.offsetWidth);
  // };

  // // initial values
  // useEffect(() => {
  //   fetchMetrics();
  // }, []);

  // // get position after resize
  // useEffect(() => {
  //   window.addEventListener('resize', fetchMetrics);
  // }, []);

  return (
    <>
      <Button ref={ref}>{title}</Button>
    </>
  )
}

export default NavigationButton