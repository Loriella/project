import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  border: 1px solid #a1eaa4;
  border-radius: 30px ;
  outline: none;
  margin: 8px;
  padding: 8px 16px;
  width: 300px;
`;

const Search = props => (
  <SearchInput type="search" />
);

export default Search;
