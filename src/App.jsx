import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle"; // styled-components용 글로벌 스타일
import NbtiPage from "./pages/nbti";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fdfdfd;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: white;
  font-family: "Pretendard", sans-serif;
`;

function App() {
  return (
    <>
      <GlobalStyle /> {/* 글로벌 스타일 적용 */}
      <Container>
        <NbtiPage />
      </Container>
    </>
  );
}

export default App;