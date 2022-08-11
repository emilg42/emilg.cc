import styled from 'styled-components'
import SearchIcon from 'public/icons/search.svg'

const Container = styled.div`
  display: inline-block;
  margin: 0 10px;
  padding: 5px 10px 0 10px;
  color: ${({ theme }) => theme.primary_text_color};

  &:hover {
    cursor: pointer;
  }
`

const Search = () => {
  return (
    <Container>
      <SearchIcon/>
    </Container>
  )
}

export default Search