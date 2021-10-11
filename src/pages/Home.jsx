import React from "react";
import ReactConfetti from "react-confetti";
import styled from "styled-components";
import HomeCard from "../components/HomeCard";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;
const Header = styled.div`
  z-index: 2;
  width: 70%;
  text-align: center;
  background-color: #1eff008d;
`;
const CardContainer = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 55vh;
`;

const Home = () => {
  return (
    <Container>
      <Header>
        <h1>Chuck Norris Jokes Show</h1>
      </Header>
      <CardContainer>
        <HomeCard
          title="Sport"
          circleColor="#28ec8aa9"
          backgroundColor="orange"
        />
        <HomeCard
          title="Animal"
          circleColor="#d2e757a9"
          backgroundColor="#ff1904a9"
        />
        <HomeCard
          title="Travel"
          circleColor="#21d9f1"
          backgroundColor="#dbee72a9"
        />
      </CardContainer>
      {/* <AnimatedShapes /> */}
      <ReactConfetti numberOfPieces="50" />
    </Container>
  );
};

export default Home;
