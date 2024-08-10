import {MessageCircle, RefreshCcw} from "lucide-react";
import React from "react";
import styled from "styled-components";

const Actions = styled.div`
  margin-top: 30px;
`;

const ActionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  text-align: left;
`;

const ActionIcon = styled.span`
  margin-right: 10px;
`;

const ActionText = styled.span`
  flex: 1;
`;

const ActionDescription = styled.div`
  font-size: 12px;
  color: #666;
`;


export default function ActionAnswer(){
    return(
        <Actions>
            <ActionTitle>Actions</ActionTitle>
            <ActionButton>
                <ActionIcon><RefreshCcw size={18} /></ActionIcon>
                <ActionText>
                    <div>Reassign</div>
                    <ActionDescription>Assign this inquiry to a different department or team</ActionDescription>
                </ActionText>
            </ActionButton>
            <ActionButton>
                <ActionIcon><MessageCircle size={18} /></ActionIcon>
                <ActionText>
                    <div>Message submitter</div>
                    <ActionDescription>Send a message to the submitter</ActionDescription>
                </ActionText>
            </ActionButton>
        </Actions>
    )
}