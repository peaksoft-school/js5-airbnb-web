import { useState } from "react";
import MeatBallsPng from "../assets/images/balls.png"
import styled from "styled-components";

const MeatBalls = (props) => {

  const [state, setState] = useState(false);

  const toggleHandler = () => {
    setState((prevstate) => !prevstate);
  };

  const optionChangeHandler = (option) => {
    setState(false)
    option.onClick(option)
  }

  return (
    <DivBlock>
      <Img
        onClick={toggleHandler}
        src={MeatBallsPng}
      />
      {state && (
        <DivContainerMeatBalls>
          {props.balls.map((option) =>
          <>
              <TextMeatBalls key={option.id} onClick={()=> optionChangeHandler(option)} >{option.text}</TextMeatBalls>
          </>
          )}
        </DivContainerMeatBalls>
      )}
      
    </DivBlock>
  );
};

export default MeatBalls;

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

const DivContainerMeatBalls = styled.div`
  width: 180px;
  height: 117px;
  border: 1px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextMeatBalls = styled.span`
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
