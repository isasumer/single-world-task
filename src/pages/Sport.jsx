import React from "react";

import styled from "styled-components";
import ParticlesComponent from "../components/ParticlesComponent";
import { useState, useEffect } from "react";
import axios from "axios";
import SportCard from "../components/SportCard";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const list = [];
const Sport = React.memo(() => {
  const baseURL = `https://api.chucknorris.io/jokes/random?category=sport`;
  const [info, setInfo] = useState({ value: "isa" });
  const [add, setAdd] = useState(true);
  useEffect(() => {
    axios.get(baseURL).then((res) => setInfo(res?.data));
  }, [add]);

  return (
    <div>
      {/* {info.value !== "isa" ? console.log(info) : null} */}
      <button onClick={() => setAdd(!add)}>Add new one</button>
      <SportCard info={info} />
    </div>
  );
});

export default Sport;

export const CardContainer = styled.div`
  width: 99%;
  display: flex;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 33%;
  margin: 0 3px 10px 0;
`;
export const Image = styled.img`
  width: 30%;
  height: 175px;
  object-fit: cover;
  border: 0.25rem solid black;
  border-radius: 10px;
`;
export const Content = styled.div`
  position: relative;
  padding-left: 10px;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid gray;
`;
export const Subtitle = styled.p``;
export const Price = styled.p``;
export const Desc = styled.div`
  padding-top: 10px;
`;
