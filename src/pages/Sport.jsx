import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getJokes } from "../store/actions/jokesAction";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mobile from "../Responsive";

const Travel = (props) => {
  const [jokes, setNewJokes] = useState(true);
  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      props.getJokes("sport");
    }
  }, [jokes]);
  const Container = styled.div`
    border: 1px solid white;
    padding: 0px;
    margin: 0px;
    background-image: linear-gradient(
      to left,
      #f4d1e5,
      #e1badb,
      #caa5d4,
      #ad92ce,
      #8981c9,
      #7389d6,
      #5391e0,
      #0099e8,
      #00b8f7,
      #00d4e7,
      #00eabc,
      #5ffb81
    );
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  const Cards = styled.div`
    justify-content: center;
    padding-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 500px);
    grid-auto-rows: auto;
    ${mobile({
      paddingTop: "0px",
      gridTemplateColumns: "350px",
    })};
  `;

  const Logo = styled.img`
    height: 100px;
    width: 100px;
    cursor: pointer;
    :hover {
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
      perspective: 1000px;
    }
    @keyframes shake {
      10%,
      90% {
        transform: translate3d(-10px, 0, 0);
      }
      20%,
      80% {
        transform: translate3d(8px, 0, 0);
      }
      30%,
      50%,
      70% {
        transform: translate3d(-8px, 0, 0);
      }
      40%,
      60% {
        transform: translate3d(8px, 0, 0);
      }
    }
    ${mobile({
      height: "60px",
      width: "60px",
    })};
  `;
  const JokeCard = styled.div`
    margin: 40px;
    background-image: linear-gradient(
      to right,
      #70e1f5 0%,
      #ffd194 51%,
      #70e1f5 100%
    );
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    :hover {
      background-position: right center; /* change the direction of the change here */
    }
    height: 310px;
    width: 440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mobile({
      width: "310px",
      padding: "5px",
      margin: "10px",
      height: "250px",
    })};
  `;
  const Header = styled.div`
    margin: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
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
    color: black;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    ${mobile({
      fontSize: "18px",
      fontWeight: "400",
    })};
  `;
  const Button = styled.button`
    width: 150px;
    background-image: linear-gradient(
      to right,
      #b4faa8 0%,
      #ffafbd 51%,
      #c9ffbf 100%
    );
    padding: 5px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    box-shadow: 0 0 20px #eee;
    font-size: 18px;
    border-radius: 20px;
    height: 50px;
    cursor: pointer;
    :hover {
      background-position: right center; /* change the direction of the change here */
      color: #090df8;
      text-decoration: none;
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
        <Button onClick={() => setNewJokes(!jokes)}>new Jokes</Button>
      </Header>
      <H1>Sport Jokes</H1>
      <Cards>
        {props.jokes.sport.map((u) => (
          <JokeCard key={u.id}>
            <Logo
              src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
              alt=""
            ></Logo>
            <P>{u.value}</P>
          </JokeCard>
        ))}
      </Cards>
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state.jokes.sport);
  return {
    jokes: state.jokes,
  };
};
export default connect(mapStateToProps, { getJokes })(Travel);
