import React from 'react';
import styled, { keyframes } from 'styled-components';
import HeaderComponent from "./Header";

const Container = styled.div`
  font-family: Arial, sans-serif;
  width: 1080px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const WelcomeCard = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WelcomeText = styled.div`
  flex: 1;
`;

const WelcomeTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const WelcomeDescription = styled.p`
  color: #666;
  font-size: 14px;
`;

const ViewButton = styled.button`
  background-color: #885EE1;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
`;

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
`;

const OverviewCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
`;

const OverviewLabel = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

const OverviewValue = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const TopicItem = styled.div`
  margin-bottom: 20px;
`;

const TopicHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const TopicName = styled.div`
  font-weight: bold;
`;

const TopicPercentage = styled.div`
  color: #666;
`;

const TopicBar = styled.div`
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

const fillAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${props => props.percentage}%;
  }
`;

const TopicProgress = styled.div`
  height: 100%;
  background-color: #885EE1;
  width: ${props => props.percentage}%;
  animation: ${fillAnimation} 1.5s ease-out forwards;
`;

const TopicCount = styled.div`
  color: #666;
  font-size: 12px;
  margin-top: 5px;
`;

const InquiriesDashboard = () => {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <Container>
                <Title>Inquiries</Title>

                <WelcomeCard>
                    <WelcomeText>
                        <WelcomeTitle>Welcome to the Inquiries Dashboard!</WelcomeTitle>
                        <WelcomeDescription>
                            You can view and respond to inquiries from your constituents here. You can also see how many are open, pending, or closed.
                        </WelcomeDescription>
                    </WelcomeText>
                    <ViewButton>View inquiries</ViewButton>
                </WelcomeCard>

                <SectionTitle>Inquiries Overview</SectionTitle>
                <OverviewGrid>
                    <OverviewCard>
                        <OverviewLabel>Open</OverviewLabel>
                        <OverviewValue>15</OverviewValue>
                    </OverviewCard>
                    <OverviewCard>
                        <OverviewLabel>Pending</OverviewLabel>
                        <OverviewValue>4</OverviewValue>
                    </OverviewCard>
                    <OverviewCard>
                        <OverviewLabel>Closed</OverviewLabel>
                        <OverviewValue>20</OverviewValue>
                    </OverviewCard>
                </OverviewGrid>

                <SectionTitle>Inquiries by Topic</SectionTitle>
                <TopicItem>
                    <TopicHeader>
                        <TopicName>Housing</TopicName>
                        <TopicPercentage>40%</TopicPercentage>
                    </TopicHeader>
                    <TopicBar>
                        <TopicProgress percentage={40} />
                    </TopicBar>
                    <TopicCount>12 inquiries</TopicCount>
                </TopicItem>
                <TopicItem>
                    <TopicHeader>
                        <TopicName>Transportation</TopicName>
                        <TopicPercentage>30%</TopicPercentage>
                    </TopicHeader>
                    <TopicBar>
                        <TopicProgress percentage={30} />
                    </TopicBar>
                    <TopicCount>9 inquiries</TopicCount>
                </TopicItem>
                <TopicItem>
                    <TopicHeader>
                        <TopicName>Public Safety</TopicName>
                        <TopicPercentage>20%</TopicPercentage>
                    </TopicHeader>
                    <TopicBar>
                        <TopicProgress percentage={20} />
                    </TopicBar>
                    <TopicCount>6 inquiries</TopicCount>
                </TopicItem>
                <TopicItem>
                    <TopicHeader>
                        <TopicName>Parks</TopicName>
                        <TopicPercentage>10%</TopicPercentage>
                    </TopicHeader>
                    <TopicBar>
                        <TopicProgress percentage={10} />
                    </TopicBar>
                    <TopicCount>3 inquiries</TopicCount>
                </TopicItem>
            </Container>
        </>
    );
};

export default InquiriesDashboard;
