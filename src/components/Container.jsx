import styled from "styled-components";

const Contain = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  //padding-top: 0;
  padding-top: 80px;
  padding-bottom: 60px;
  position: relative;
`;

export default function  Container({children}) {
    return (
        <Contain>
            {children}
        </Contain>
    )
}