import {ThumbsDown, ThumbsUp} from "lucide-react";
import React from "react";
import styled from "styled-components";


const FeedbackSection = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const FeedbackQuestion = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const FeedbackButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const FeedbackButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const FeedbackCount = styled.span`
  margin-left: 5px;
`;


export default function  FeedBackComponent() {
    return (
        <FeedbackSection>
            <FeedbackQuestion>Was this helpful?</FeedbackQuestion>
            <FeedbackButtons>
                <FeedbackButton>
                    <ThumbsUp size={18} />
                    <FeedbackCount>20</FeedbackCount>
                </FeedbackButton>
                <FeedbackButton>
                    <ThumbsDown size={18} />
                    <FeedbackCount>3</FeedbackCount>
                </FeedbackButton>
            </FeedbackButtons>
        </FeedbackSection>
    )
}