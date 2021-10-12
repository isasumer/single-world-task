import React from "react";
import ReactConfetti from "react-confetti";
import styled from "styled-components";
import HomeCard from "../components/HomeCard";
import AnimatedShapes from "../components/AnimatedShapes";
import mobile from "../Responsive";

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
  ${mobile({
    justifyContent: "start",
  })};
`;
const Header = styled.div`
  z-index: 2;
  width: 60%;
  text-align: center;
  border-radius: 2%;
  background-color: #1eff008d;
  ${mobile({
    fontSize: "12px",
  })};
`;
const CardContainer = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 55vh;
  ${mobile({
    height: "20vh",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
  })};
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
      <AnimatedShapes />
      <ReactConfetti numberOfPieces="50" />
    </Container>
  );
};

export default Home;
