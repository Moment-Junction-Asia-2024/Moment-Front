import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {ThumbsUp, ThumbsDown} from 'lucide-react';
import HeaderComponent from "./Header";
import SearchInput from "./Search";
import {useNavigate} from "react-router";
import Container from "./Container";
import {TypingText} from "./TypingText";
import VideoAnswer from "./VideoAnswer";
import Lottie from "react-lottie-player";
import animationData from '../lottie/ai.json';
import ActionAnswer from "./ActionAnswer";
import Question from "./Question"; // Lottie JSON 파일 경로

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

const TextAnswer = () => {
    const [video, setVideo] = useState(null)
    const navigate = useNavigate();
    const messageEndRef = useRef(null);

    // useEffect(() => {
    //
    // }, [messages]);

    const handleKeyDown = (event) => {
        // messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const onAction = () => {
        setVideo(false);
        setTimeout(() => {
            setVideo(true)
            setTimeout(() => {
                messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 500)
        }, 2000)
    }

    return (
        <Container>
            <HeaderComponent></HeaderComponent>
            <Breadcrumb>Civil complaint / Find missing children</Breadcrumb>
            <Question>A child in blue went missing at 18:00 at the Gyeongju Hwabaek Convention Center.</Question>
            <Title>A child in blue went missing at 18:00 at the Gyeongju Hwabaek Convention Center.
            </Title>
            <Content>
                <TypingText speed={10}
                            text={"Search CCTV within a 100m radius of Gyeongju Hwabaek Convention Center and extract images from 17:55 to 18:05.."}
                            onAction={onAction}
                ></TypingText>
            </Content>
            {/*<ViewMoreButton>View more details</ViewMoreButton>*/}
            {
                video === null  ? <></> :  video === true   ?
                    <>
                        <VideoAnswer
                            title={'before 17:55 ~ 18:05 Videos '}
                            description={'From CCTV 3-12, 4-12'}
                        />
                        <ActionAnswer>

                        </ActionAnswer>
                    </>

                    :
                    <LottieContainer>
                        <Lottie
                            loop
                            animationData={animationData}
                            play
                            style={{width: 150, height: 150, margin: "0 auto"}}
                        />
                    </LottieContainer>
            }


            <div ref={messageEndRef}></div>
            <SearchInput onKeyDown={handleKeyDown}>

            </SearchInput>
        </Container>
    );
};

export default TextAnswer;