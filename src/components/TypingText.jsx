import React, { useEffect, useState } from "react";

export const TypingText = ({ text, speed = 100, onAction }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        const characters = [...text]; // 텍스트를 유니코드 포인트 배열로 변환
        let index = 0;

        const intervalId = setInterval(() => {
            if (index < characters.length) {
                setDisplayedText(prev => prev + characters[index]);
                index++;
            } else {
                clearInterval(intervalId);
                if (onAction) {
                    onAction();
                }
            }
        }, speed);

        return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 정리
    }, [text, speed, onAction]);

    return <div>{displayedText}</div>;
};