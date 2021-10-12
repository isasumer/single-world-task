import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getJokes } from "../store/actions/jokesAction";
import styled from "styled-components";
import ParticlesComponentTravel from "../components/ParticlesComponentTravel";
import { Link } from "react-router-dom";
import mobile from "../Responsive";

const Travel = (props) => {
  const [jokes, setNewJokes] = useState(true);
  const [showImage, setShowImage] = useState(true);
  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      props.getJokes("travel");
    }
  }, [jokes]);
  const Container = styled.div`
    height: 100vh;
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
  const Card = styled.div`
    margin: 40px;
    ${mobile({
      margin: "5px",
    })};
  `;
  const Image = styled.img`
    height: 300px;
    width: 450px;
  `;
  const Logo = styled.img`
    height: 100px;
    width: 100px;
    ${mobile({
      height: "60px",
      width: "60px",
    })};
  `;
  const JokeCard = styled.div`
    padding: 10px 5px 0px;
    background-color: #d9afd929;
    background-image: linear-gradient(0deg, #d9afd965 0%, #97dae140 100%);
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
  const Span = styled.span`
    font-size: 50px;
  `;
  const P = styled.p`
    color: white;
    font-size: 20px;
    text-align: center;
    ${mobile({
      fontSize: "18px",
      fontWeight: "400",
    })};
  `;

  const Button = styled.button`
    background-image: linear-gradient(
      to right,
      #b4faa8 0%,
      #ffafbd 51%,
      #c9ffbf 100%
    );
    margin: 10px;
    padding: 15px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    box-shadow: 0 0 20px #eee;
    font-size: 18px;
    border-radius: 20px;
    height: 50px;
    width: 180px;
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
        <Button onClick={() => setNewJokes(!jokes)}>New Jokes</Button>
      </Header>
      <H1>
        <Span style={{ color: "#e6c224" }}>Tra</Span>
        <Span style={{ color: "#0abde3" }}>vel </Span>
        <Span style={{ color: "#c7c3c3" }}> Jo</Span>
        <Span style={{ color: "#1500d3" }}>kes </Span>
      </H1>
      <Cards>
        {props.jokes.travel.map((u) => (
          <Card key={u.id}>
            {showImage ? (
              <Image
                src="https://memegenerator.net/img/instances/51307627/even-chuck-takes-travel-insurance.jpg"
                alt=""
                onClick={() => setShowImage(!showImage)}
              ></Image>
            ) : (
              <JokeCard onClick={() => setShowImage(!showImage)}>
                <Logo
                  src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
                  alt=""
                ></Logo>
                <P>{u.value}</P>
              </JokeCard>
            )}
          </Card>
        ))}
      </Cards>
      <ParticlesComponentTravel />
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state.jokes);
  return {
    jokes: state.jokes,
  };
};
export default connect(mapStateToProps, { getJokes })(Travel);
