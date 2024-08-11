import React from 'react';
import styled from "styled-components";

export default function Question({children}){
    const QuestionBox = styled.div`
      display: flex;
      justify-content: right;
      div{
        background: #F0F2F5;
        padding: 20px;
        border-radius: 16px;
        text-align: right;
        display: inline-block;
      }
      margin-bottom: 15px;
    `
    return(
        <QuestionBox>
            <div>
                {children}
            </div>
        </QuestionBox>
    )
}