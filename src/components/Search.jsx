import React from "react";
import styled from "styled-components";

const SearchInputComponent = styled.input`
  width: 1200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  

`;

const SearchContainer = styled.div`
  background: white;
  position: fixed;
  bottom: 0;
  padding-bottom: 30px;
`

export default function SearchInput ({onKeyDown}){
    return (
        <SearchContainer>
            <SearchInputComponent type="text" placeholder="무엇이든지 요청해주세요" onKeyDown={onKeyDown} />
        </SearchContainer>
    )
}