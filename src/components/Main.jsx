import React from 'react';
import styled from 'styled-components';
import { List, Search, Building2 } from 'lucide-react';
import {useNavigate} from "react-router";
import animationData from '../lottie/logo.json'; // Lottie JSON 파일 경로
import Lottie from "react-lottie-player";
import Header from "./Header";
import HeaderComponent from "./Header";
import SearchInput from "./Search";
import Container from "./Container";

const Main = styled.main`
  text-align: center;
`;

const SearchBox = styled.input`
  width: 1200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 30px;
`;


const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const MenuIcon = styled.div`
  margin-right: 15px;
`;

const MenuText = styled.div`
  flex-grow: 1;
  text-align: left;
`;

const MenuTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const MenuDescription = styled.div`
  font-size: 14px;
  color: #666;
`;

const ArrowIcon = styled.div`
  font-size: 20px;
`;

const LottieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const MainComponent = () => {
    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            navigate('/answer');
        }
    };


    return (
        <Container>
            <HeaderComponent></HeaderComponent>
            <Main>
                <LottieContainer>
                    <Lottie
                        loop
                        animationData={animationData}
                        play
                        style={{ width: 150, height: 150 }}
                    />
                </LottieContainer>
                <Title>Hello, this is the smartest complaint handling service.</Title>
                <Subtitle>If you request what work you need, artificial intelligence will understand and return the data accordingly.
                </Subtitle>
                <SearchBox type="text" placeholder="Request anythings" onKeyDown={handleKeyDown} />
                <MenuList>
                    <MenuItem>
                        <MenuIcon><List size={24} /></MenuIcon>
                        <MenuText>
                            <MenuTitle>Complaints</MenuTitle>
                            <MenuDescription>Photo-based complaints detected by taxi sensors can be viewed based on priority.
                            </MenuDescription>
                        </MenuText>
                        <ArrowIcon>&gt;</ArrowIcon>
                    </MenuItem>
                    <MenuItem>
                        <MenuIcon><Search size={24} /></MenuIcon>
                        <MenuText>
                            <MenuTitle>Processing Status</MenuTitle>
                            <MenuDescription>Based on a specific area, it is possible to determine the condition of the road or whether it is dangerous.
                                .</MenuDescription>
                        </MenuText>
                        <ArrowIcon>&gt;</ArrowIcon>
                    </MenuItem>
                    <MenuItem>
                        <MenuIcon><Building2 size={24} /></MenuIcon>
                        <MenuText>
                            <MenuTitle>City Services</MenuTitle>
                            <MenuDescription>These are services that can be cooperated in search of missing persons .</MenuDescription>
                        </MenuText>
                        <ArrowIcon>&gt;</ArrowIcon>
                    </MenuItem>
                </MenuList>
            </Main>
        </Container>
    );
};

export default MainComponent;