import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getJokes } from "../store/actions/jokesAction";
import styled from "styled-components";
import ParticlesComponentAnimal from "../components/ParticlesComponentAnimal";
import { Link } from "react-router-dom";
import mobile from "../Responsive";

const Animal = (props) => {
  const [jokes, setNewJokes] = useState(true);
  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      props.getJokes("animal");
    }
  }, [jokes]);
  const Container = styled.div`
    border: 1px solid red;
    height: 100vh;
  `;
  const Cards = styled.div`
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, 500px);
    grid-auto-rows: auto;
    grid-gap: 1rem;
  `;
  const Card = styled.div`
    width: 95%;
    height: 300px;
    border: 2px solid #e7e7e7;
    border-radius: 4px;
    padding: 10px 10px 5px;
    text-align: center;
    background: linear-gradient(rgb(141, 255, 113), rgb(91, 227, 216));
    transition: 0.6s;
    transform: rotatex(70deg) translatey(-400px) translatez(-50px);
    box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.5);
    :hover {
      transform: rotatex(0deg);
      transform: rotatez(0deg);
      transition: 0.6s;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    }
  `;
  const Image = styled.img`
    transform: translateY(15px);
    height: 120px;
  `;
  const Header = styled.div`
    margin: 10px 0 0 60px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    justify-content: center;
    ${mobile({
      justifyContent: "start",
      margin: "5px 0 0 10px",
    })};
  `;
  const H1 = styled.h1`
    text-align: center;
  `;
  const P = styled.p`
    font-size: 20px;
    text-align: center;
    transform: translatex(12px);
  `;
  const Button = styled.button`
    background-color: #00f635ae;
    margin: 10px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 20px;
    height: 40px;
    width: 180px;
    cursor: pointer;
    :hover {
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
      perspective: 1000px;
    }
    @keyframes shake {
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }
      20%,
      80% {
        transform: translate3d(2px, 0, 0);
      }
      30%,
      50%,
      70% {
        transform: translate3d(-2px, 0, 0);
      }
      40%,
      60% {
        transform: translate3d(2px, 0, 0);
      }
    }
    ${mobile({
      margin: "2px",
      fontSize: "12px",
      height: "25px",
      width: "130px",
      padding: "5px 10px",
    })};
  `;

  return (
    <Container>
      <Header>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/sport">
          <Button>Sport Jokes</Button>
        </Link>
        <Link to="/travel">
          <Button>Travel Jokes</Button>
        </Link>
        <Link to="/animal">
          <Button>Animal Jokes</Button>
        </Link>
        <Button onClick={() => setNewJokes(!jokes)}>New Jokes</Button>
      </Header>
      <H1>Animal Jokes</H1>
      <Cards>
        {props.jokes.animal.map((u) => (
          <Card key={u.id}>
            <Image src={u.icon_url} alt=""></Image>
            <P>{u.value}</P>
          </Card>
        ))}
      </Cards>
      <ParticlesComponentAnimal />
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state.jokes);
  return {
    jokes: state.jokes,
  };
};
export default connect(mapStateToProps, { getJokes })(Animal);

/*  S T Y L E S  */
