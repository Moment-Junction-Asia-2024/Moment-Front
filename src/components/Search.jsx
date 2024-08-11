import React from "react";
import styled from "styled-components";

const SearchInputComponent = styled.div`
  width: 1060px;

  padding: 10px;
  
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SearchBox = styled.input`
  font-size: 16px;
  width: 965px;
  border: none;
  outline: none;
`;

const SearchContainer = styled.div`
  background: white;
  position: fixed;
  z-index: 500;
  bottom: 0;
  padding-bottom: 30px;
`

const ViewButton = styled.button`
  background-color: #885EE1;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  &:hover{
    background-color: #885EE1;
    opacity: 0.85;
  }
`;


export default function SearchInput ({onKeyDown, onClickSearch}){
    return (
        <SearchContainer>
           <SearchInputComponent>
               <SearchBox type="text" placeholder="Request anythings" onKeyDown={onKeyDown} />
               <ViewButton onClick={onClickSearch}>Search</ViewButton>
           </SearchInputComponent>
        </SearchContainer>
    )
}