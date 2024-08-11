import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {
    List,
    Search,
    Building2,
    ArrowRight,
    ArrowRightFromLine,
    ArrowRightIcon,
    ArrowRightToLine,
    StepBackIcon, LucideSendToBack, ArrowRightLeft, Backpack, ChevronRight
} from 'lucide-react';
import {useNavigate} from "react-router";
import animationData from '../lottie/logo.json'; // Lottie JSON 파일 경로
import Lottie from "react-lottie-player";
import Header from "./Header";
import HeaderComponent from "./Header";
import SearchInput from "./Search";
import Container from "./Container";
import {NavLink} from "react-router-dom";
import axios from "axios";


const MainContainer = styled.div`
  font-family: Arial, sans-serif;
    width: 100%;
    height: 90vh;
    display: flex;
  justify-content: center;
  align-items: center;
`
const Main = styled.main`
  text-align: center;
  width: 1080px;

`;

const SearchBox = styled.textarea`
  border: none;
  outline: none;
  font-size: 16px;
  width: 1000px;
  overflow-y: auto; /* 내용이 많아지면 스크롤 생성 */
  resize: none;
  box-sizing: border-box;
  max-height: 100px; /* 최대 높이 설정 */
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 1060px;
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
  a{
    text-decoration-line: none;
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: black;
  text-decoration-line: none;

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
  text-decoration-line: none;
`;

const MenuTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  text-decoration-line: none;
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

const ViewButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #885EE1;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  height: 40px;
  &:hover{
    background-color: #885EE1;
    opacity: 0.85;
  }
`;
const MainComponent = () => {
    const navigate = useNavigate();

    const textareaRef = useRef(null);
    const [message, setMessage] = useState('')

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const result = await axios.post('http://192.168.67.102/action/', {
    //             userPrompt: message
    //         });
    //         // setResponse(result.data);
    //         setMessage('');
    //     } catch (error) {
    //         console.error('Error sending message:', error);
    //         setResponse('Error: Unable to send message');
    //     }
    // };

    const handleKeyDown = (e) => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    const handleInput = (e) => {
        // 현재 높이를 'auto'로 초기화하여 텍스트가 줄어들면 높이도 줄어들게 함
        e.target.style.height = 'auto';

        // 높이가 설정된 `max-height`보다 작을 경우 높이를 scrollHeight로 설정
        if (e.target.scrollHeight <= 100) {
            e.target.style.height = `${e.target.scrollHeight}px`;
        } else {
            // 높이가 `max-height`를 초과할 경우 `max-height`로 설정하고, 스크롤바가 생기도록 함
            e.target.style.height = '200px';
        }
    };

    const onClickSearch = () => {
        navigate(`/answer?quest=${message}`);
    }


    return (
        <MainContainer>
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
                <SearchContainer>
                    <SearchBox type="text" placeholder="Request anythings"
                               style={{
                                   width: 'calc(100% - 80px)',
                                   overflowY: 'hidden',
                                   resize: 'none',
                                   boxSizing: 'border-box'
                               }}
                               onChange={(e) => setMessage(e.target.value)}
                               onInput={handleInput}

                    />
                    <ViewButton onClick={onClickSearch}>Search</ViewButton>
                </SearchContainer>
                <MenuList>
                    <NavLink to={'/demo'}>
                     <MenuItem>
                         <MenuIcon><List size={24} /></MenuIcon>
                         <MenuText>
                             <MenuTitle>Complaints</MenuTitle>
                             <MenuDescription>Photo-based complaints detected by taxi sensors can be viewed based on priority.
                             </MenuDescription>
                         </MenuText>
                         <ChevronRight>&gt;</ChevronRight>
                     </MenuItem>
                    </NavLink>
                    <NavLink to={'/demo2'}>
                        <MenuItem>
                            <MenuIcon><Search size={24} /></MenuIcon>
                            <MenuText>
                                <MenuTitle>Processing Status</MenuTitle>
                                <MenuDescription>Based on a specific area, it is possible to determine the condition of the road or whether it is dangerous.
                                    .</MenuDescription>
                            </MenuText>
                            <ChevronRight>&gt;</ChevronRight>
                        </MenuItem>
                    </NavLink>
                    <MenuItem>
                        <MenuIcon><Building2 size={24} /></MenuIcon>
                        <MenuText>
                            <MenuTitle>City Services</MenuTitle>
                            <MenuDescription>These are services that can be cooperated in search of missing persons .</MenuDescription>
                        </MenuText>
                        <ChevronRight>&gt;</ChevronRight>
                    </MenuItem>
                </MenuList>
            </Main>
        </MainContainer>
    );
};

export default MainComponent;