import { useState } from "react";
import MeadBallsPng from "../assets/images/balls.png"
import styled from "styled-components";

const MeadBalls = (props) => {

  const [state, setState] = useState(false);

  const toggleHandler = () => {
    setState((prevstate) => !prevstate);
  };

  const ActiveCloseHandler = () => {
    setState(false)
    // props.gettext(text)
  }

  return (
    <DivBlock>
      <Img
        onClick={toggleHandler}
        src={MeadBallsPng}
      />
      {state && (
        <DivContainerMeadBalls>
          {props.balls.map((option) =>
          <>
              <TextMeadBalls key={option.id} onClick={()=> ActiveCloseHandler()} >{option.text}</TextMeadBalls>
          </>
          )}
        </DivContainerMeadBalls>
      )}
    </DivBlock>
  );
};

export default MeadBalls;

const DivBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
width: 20px;
height: 5px;
  @media (max-width: 375px) {
    width: 25px;
    height: 10px;
  }
`;

const DivContainerMeadBalls = styled.div`
  width: 180px;
  height: 117px;
  border: 1px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextMeadBalls = styled.span`
  height: 27px;
  display: flex;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding-left: 10px;
  color: #5d5d5d;
  &:hover {
    background-color: #f3f3f3;
  }
`;
