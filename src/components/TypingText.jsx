import {useEffect, useState} from "react";

export const TypingText = ({ text, speed = 100 , onAction}) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;
            if (index === text.length - 1) {
                clearInterval(intervalId);
                onAction();
            }
        }, speed);

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, [text, speed]);

    return <div>{displayedText}</div>;
};
