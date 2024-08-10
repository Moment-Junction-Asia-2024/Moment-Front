import React from 'react';
import styled from 'styled-components';
import { RefreshCcw, MessageCircle } from 'lucide-react';
import HeaderComponent from "./Header";
import Container from "./Container";


const Breadcrumb = styled.div`
  color: #666;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const InfoItem = styled.div`
  margin-bottom: 20px;
`;

const InfoLabel = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
`;

const InfoValue = styled.div`
  font-size: 14px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Timeline = styled.div`
  margin-top: 30px;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const TimelineIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const TimelineContent = styled.div`
  flex: 1;
`;

const TimelineTitle = styled.div`
  font-weight: bold;
`;

const TimelineDescription = styled.div`
  color: #666;
  font-size: 14px;
`;

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

const ImageAnswer = () => {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <Container>
                <Breadcrumb>Inquiries / Pothole on 3rd Street</Breadcrumb>
                <Title>Pothole on 3rd Street</Title>
                <InfoGrid>
                    <InfoItem>
                        <InfoLabel>Submitted 2 days ago</InfoLabel>
                        <InfoValue><strong>Location</strong></InfoValue>
                        <InfoValue>3rd Street, San Francisco</InfoValue>
                        <Image src="/crack.png" alt="Map" />
                    </InfoItem>
                    <InfoItem>
                        <InfoLabel>Submitted 2 days ago</InfoLabel>
                        <InfoValue><strong>Description</strong></InfoValue>
                        <InfoValue>Large pothole, needs repair</InfoValue>
                        <Image src="/crack.png" alt="Pothole" />
                    </InfoItem>
                    <InfoItem>
                        <InfoLabel>Submitted 2 days ago</InfoLabel>
                        <InfoValue><strong>Submitter</strong></InfoValue>
                        <InfoValue>Jane Doe, 415-555-1234, janedoe@gmail.com</InfoValue>
                        <Image src="/crack.png" alt="Submitter" />
                    </InfoItem>
                    <InfoItem>
                        <InfoLabel>Submitted 2 days ago</InfoLabel>
                        <InfoValue><strong>Status</strong></InfoValue>
                        <InfoValue style={{color: 'blue'}}>Open</InfoValue>
                        <Image src="/api/placeholder/400/200" alt="Status" />
                    </InfoItem>
                </InfoGrid>
                <Timeline>
                    <TimelineItem>
                        <TimelineIcon src="/user.png" alt="John Smith" />
                        <TimelineContent>
                            <TimelineTitle>Assigned to road repair crew</TimelineTitle>
                            <TimelineDescription>John Smith</TimelineDescription>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineIcon src="/user.png" alt="Road Repair Crew" />
                        <TimelineContent>
                            <TimelineTitle>Road repair crew dispatched</TimelineTitle>
                            <TimelineDescription>Road Repair Crew</TimelineDescription>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineIcon src="/user.png" alt="Road Repair Crew" />
                        <TimelineContent>
                            <TimelineTitle>Pothole repaired</TimelineTitle>
                            <TimelineDescription>Road Repair Crew</TimelineDescription>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
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
            </Container>

        </>

    );
};

export default ImageAnswer;