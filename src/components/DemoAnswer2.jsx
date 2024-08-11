import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {ThumbsUp, ThumbsDown} from 'lucide-react';
import HeaderComponent from "./Header";
import SearchInput from "./Search";
import {useNavigate} from "react-router";
import Container from "./Container";
import VideoAnswer from "./VideoAnswer";
import Lottie from "react-lottie-player";
import animationData from '../lottie/ai.json';
import ActionAnswer from "./ActionAnswer";
import Question from "./Question";
import {ImageFilterPopup} from "./ImageFilterPopup"; // Lottie JSON 파일 경로
import {EditIcon} from "lucide-react";
import axios from "axios";
import {Typewriter} from "react-simple-typewriter";
import {MapComponent} from "./Map";
import ImageAnswer from "./ImageAnswer";



const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const CityLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Breadcrumb = styled.div`
  color: #666;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.6;
  //margin-bottom: 20px;
`;

const ViewMoreButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  float: right;
`;


const LottieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  margin-top: -25px;
`

const CrackImage = styled.img`
  width: 100%;
`

const DemoAnswer2 = () => {
    const [video, setVideo] = useState(false)
    const navigate = useNavigate();
    const messageEndRef = useRef(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const socketRef = useRef(null);

    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const [step2, setStep2] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://서버IP:8080/action/', {
                userPrompt: message
            });
            setResponse(result.data);
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
            setResponse('Error: Unable to send message');
        }
    };

    // useEffect(() => {
    //     // WebSocket 서버 주소를 적절히 변경해야 합니다
    //     socketRef.current = new WebSocket('ws://192.168.67.102:8089');
    //
    //     socketRef.current.onmessage = (event) => {
    //         const message = JSON.parse(event.data);
    //         setMessages((prevMessages) => [...prevMessages, message]);
    //     };
    //
    //     return () => {
    //         socketRef.current.close();
    //     };
    // }, []);


    // useEffect(() => {
    //
    // }, [messages]);

    const handleKeyDown = (event) => {
        // messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const onClickSearch = () =>{

    }
    useEffect(() => {
        onAction()
    }, []);
    const onAction = () => {
        setTimeout(() => {
            setStep2(true)
            setVideo(true)

            setTimeout(() => {
                messageEndRef.current.scrollIntoView({ behavior: 'smooth' });

            }, 500)
        }, 2000)
    }

    return (
        <Container>
            <HeaderComponent></HeaderComponent>
            <Breadcrumb>Civil complaint / road maintenance</Breadcrumb>
            <Question>Please let me know which roads in Pohang City are in urgent need of pothole repair</Question>
            <Title>A road search in urgent need of construction
            </Title>
            <Content>
                <Typewriter
                    words={["We will explore and analyze the pothole report result file.\n"]}
                    loop={1}
                    cursor
                    cursorStyle='_'
                    typeSpeed={20}
                    onLoopDone={() => onAction()}
                />
            </Content>
            {
                step2 && <MapComponent>

                </MapComponent>
            }
            {
                step2 && <CrackImage src={'/crack.png'}/>
            }
            <LottieContainer>
                <Lottie
                    loop
                    animationData={animationData}
                    play
                    style={{width: 150, height: 150, margin: "0 auto"}}
                />
            </LottieContainer>
            <div style={{
                height: "50px"
            }}></div>
            <div ref={messageEndRef}></div>
            <SearchInput onKeyDown={handleKeyDown} onClickSearch={handleSubmit}/>
            <ImageFilterPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}></ImageFilterPopup>
        </Container>
    );
};

export default DemoAnswer2;