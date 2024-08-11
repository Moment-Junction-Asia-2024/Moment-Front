import React from 'react';
import styled from 'styled-components';
import HeaderComponent from "./Header";
import SearchInput from "./Search";
import {useNavigate} from "react-router";
import Container from "./Container";
import {Edit2, Edit3, EditIcon, MessageCircle} from "lucide-react";
// import {Tooltip} from "react-tooltip";


const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  cursor: pointer;
  text-underline: black;
`;

const Image = styled.img`
  width: 50%;
  border-radius: 8px;
  //margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const ReportDetails = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #3367d6;
  }
`;

const Video = styled.video`
  width: 100%;
`

const VideoAnswer = ({title, description, onClick}) => {
    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            navigate('/image');
        }
    };

    return (
        <>
            <Title  onClick={onClick}>{title} <Edit3 size={18} data-tooltip-content='You can change date about search period' data-tooltip-id='tooltip' /></Title>
            <Video src={"/video.mp4"} autoPlay={true}></Video>
            {/*<Image src="/mock_image.png" alt="Vehicle parked on sidewalk"/>*/}
            <Description>
                {description}
            </Description>
            {/*<Tooltip*/}
            {/*    id='tooltip'*/}
            {/*    backgroundColor='gray'*/}
            {/*    place="bottom"*/}
            {/*    arrowColor='transparent'*/}
            {/*/>*/}
        </>
    );
};

// Placeholder for the header component

export default VideoAnswer;