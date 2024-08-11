import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

const ChatInput = styled.input`
  padding: 10px;
  border-top: 1px solid #ccc;
`;

const Message = styled.div`
  margin-bottom: 10px;
  padding: 5px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const WebSocketChat = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const socketRef = useRef(null);

    useEffect(() => {
        // WebSocket 서버 주소를 적절히 변경해야 합니다
        socketRef.current = new WebSocket('ws://192.168.67.102:8089');

        socketRef.current.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        return () => {
            socketRef.current.close();
        };
    }, []);

    const sendMessage = () => {
        if (inputMessage.trim() === '') return;

        const message = {
            type: 'chat',
            content: inputMessage,
            timestamp: new Date().toISOString(),
        };

        socketRef.current.send(JSON.stringify(message));
        setInputMessage('');
    };

    return (
        <ChatContainer>
            <ChatMessages>
                {messages.map((msg, index) => (
                    <Message key={index}>{msg.content}</Message>
                ))}
            </ChatMessages>
            <ChatInput
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type a message..."
            />
        </ChatContainer>
    );
};

export default WebSocketChat;