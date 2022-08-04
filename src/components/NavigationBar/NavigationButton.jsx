import styled from 'styled-components'

// .category-container {
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   width: 100%;
// }

// .category {
//   position: relative;
//   display: flex;
//   justify-content: center;
// }

// a {
//   text-decoration: none;
// }

// .category-button {
//   transition: all 0.2s ease-in-out;
//   border: none;
//   min-width: auto;
//   text-align: center;
// }

// .category-button-active {
//   color: black;
//   opacity: 100%;
// }


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