import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ccdfff;
  position: absolute;
  top: 600px;
  left: -60px;

  animation: square 25s linear alternate infinite;
  @keyframes square {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;
const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color || "#fa5513"};
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};

  animation: circle 25s linear alternate infinite;
  @keyframes circle {
    to {
      transform: translate(20vw, 20vh);
    }
  }
`;
const Rect = styled.div`
  width: 40px;
  height: 70px;
  background-color: #49fa13;
  position: absolute;
  top: 0;
  right: 0px;

  animation: rect 25s linear alternate infinite;
  @keyframes rect {
    to {
      transform: translate(-90vw, 50vh);
    }
  }
`;
const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Rect />
      <Circle top="0px" left="0px" color="red" />
      <Circle top="200px" left="80px" color="yellow" />
      <Circle top="100px" left="600px" color="gray" />
    </>
  );
};

export default AnimatedShapes;
