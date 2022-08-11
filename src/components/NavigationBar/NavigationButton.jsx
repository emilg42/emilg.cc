import styled from 'styled-components'

const Button = styled.span`
  margin: 0 10px;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 10px;
  font-weight: 600;
  font-family: 'Cantarell';
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primary_text_color };
  z-index: 2;
`

const NavigationButton = ({ title, update, initial }) => {
  return (
    <Button ref={initial} onMouseEnter={(element) => update(element.target)}>
      {title}
    </Button>
  )
}

export default NavigationButton