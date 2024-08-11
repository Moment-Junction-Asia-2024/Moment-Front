import React, {useState} from 'react';
import styled from 'styled-components';
import { RefreshCcw, MessageCircle } from 'lucide-react';
import HeaderComponent from "./Header";
import Container from "./Container";
import { X } from 'lucide-react';


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
  grid-template-columns: 1fr 1fr 1fr;
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


// ... (기존의 styled components는 그대로 유지)

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Modal = ({ isOpen, onClose, videoSrc }) => {
    if (!isOpen) return null;

    return (
        <ModalBackdrop onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <X />
                </CloseButton>
                <video width="100%" controls autoPlay>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </ModalContent>
        </ModalBackdrop>
    );
};

const ImageAnswer = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState('');

    const openModal = (videoSrc) => {
        setCurrentVideo(videoSrc);
        setModalOpen(true);
    };

    return (
        <>
            <InfoGrid>
                <InfoItem>
                    <InfoLabel>1 days ago</InfoLabel>
                    <InfoValue><strong>22:08</strong></InfoValue>
                    <InfoValue>CCTV3</InfoValue>
                    <Image
                        src="/frame.jpg"
                        alt="Pothole"
                        onClick={() => openModal("/cctv1.mp4")}
                        style={{ cursor: 'pointer' }}
                    />
                </InfoItem>
                <InfoItem>
                    <InfoLabel>2 days ago</InfoLabel>
                    <InfoValue><strong>23:21</strong></InfoValue>
                    <InfoValue>CCTV2</InfoValue>
                    <Image
                        src="/frame2.jpg"
                        alt="Submitter"
                        onClick={() => openModal("/cctv2.mp4")}
                        style={{ cursor: 'pointer' }}
                    />
                </InfoItem>
                <InfoItem>
                    <InfoLabel>2 days ago</InfoLabel>
                    <InfoValue><strong>23:33</strong></InfoValue>
                    <InfoValue style={{color: 'blue'}}>Check</InfoValue>
                    <Image
                        src="/frame3.jpg"
                        alt="Status"
                        onClick={() => openModal("/cctv3.mp4")}
                        style={{ cursor: 'pointer' }}
                    />
                </InfoItem>
            </InfoGrid>
            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                videoSrc={currentVideo}
            />
        </>
    );
};

export default ImageAnswer;