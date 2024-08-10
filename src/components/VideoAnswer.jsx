import React from 'react';
import styled from 'styled-components';
import HeaderComponent from "./Header";
import SearchInput from "./Search";
import {useNavigate} from "react-router";
import Container from "./Container";


const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
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

const VideoAnswer = ({title, description}) => {
    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            navigate('/image');
        }
    };

    return (
        <>
            <Title>{title}</Title>
            <Image src="/mock_image.png" alt="Vehicle parked on sidewalk" />
            <Description>
                {description}
            </Description>
        </>
    );
};

// Placeholder for the header component

export default VideoAnswer;