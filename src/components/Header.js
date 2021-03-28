import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..." />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>User name</Name>
        <UserImg>
          <img src="https://i.imgur.com/6VBx3io.png" />
        </UserImg>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: #350d36;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Main = styled.div`
  display: flex;
  margin: 0 16px;
`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin: 0 16px;
`;

const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  border-radius: 6px;
  width: 100%;
  display:flex;
  align-items: center;



  input {
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 4px 8px;
    color: white;
  }

  input:focus {
      outline:none;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px 0 0;
  position: absolute;
  right: 0;
`;

const Name = styled.div`
  padding: 0 16px 0 0;
`;

const UserImg = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid;
  border-radius: 3px;
  img {
    width: 100%;
  }
`;
