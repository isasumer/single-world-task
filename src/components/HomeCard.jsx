import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function HomeCard(props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapper>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.2}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        color={props.backgroundColor}
      >
        <CircleWrapper>
          <Circle color={props.circleColor} />
        </CircleWrapper>
        <Wrapper>
          <Logo
            style={{
              x,
              y,
              rotateX,
              rotateY,
              z: 100000,
            }}
            drag
            dragElastic={0.11}
            whileTap={{ cursor: "grabbing" }}
          >
            <img
              src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
              alt="logo"
            />
          </Logo>
          <Link to={props.title}>
            <Button>{props.title} Jokes</Button>
          </Link>
        </Wrapper>
      </CardContainer>
    </CardWrapper>
  );
}

export default HomeCard;

const CardWrapper = styled.div`
  z-index: 2;
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 90%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 10px 10px 5px rgba(31, 31, 31, 0.2);
  background-color: ${(props) => props.color || "green"};
  position: relative;
  cursor: grab;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  top: -4.2em;
  left: -10em;
  z-index: 5;
  background-color: ${(props) => props.color || "green"};
  border-radius: 50%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(motion.div)`
  z-index: 99;
  user-select: none;

  img {
    width: 90%;
    height: 90%;
    user-select: none;
    :hover {
      width: 95%;
      height: 95%;
    }
  }
`;
export const Button = styled.button`
  background-color: #00f635ae;
  font-size: 20px;
  font-weight: 600;
  border-radius: 20px;
  height: 40px;
  width: 150px;
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
`;
