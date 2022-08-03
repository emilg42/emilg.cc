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
    background-color: #1A1C23;
  }
`

const NavigationButton = ({ title }) => {
  return (
    <>
      <Button>{title}</Button>
    </>
  )
}

export default NavigationButton