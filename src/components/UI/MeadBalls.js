import { useState } from "react";
import styled from "styled-components";

const meadBalls = [
  {
    edit: "Edit",
    delete: "Delete",
    accept: "Accept",
  },
];

const MeadBalls = () => {
  const [state, setState] = useState(false);

  const toggleHandler = () => {
    setState((prevstate) => !prevstate);
  };

  return (
    <DivBlock>
      <Img
        onClick={toggleHandler}
        src="https://t3.ftcdn.net/jpg/03/08/33/46/360_F_308334660_uHmbiG3XBfIYBJhocWnPIEjnfvWAznLk.jpg"
      />
      {state && (
        <DivContainerMeadBalls>
          {meadBalls.map((item) => {
            return (
              <>
                <TextMeadBalls>{item.edit}</TextMeadBalls>
                <TextMeadBalls>{item.delete}</TextMeadBalls>
                <TextMeadBalls>{item.accept}</TextMeadBalls>
              </>
            );
          })}
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
  width: 22px;
  height: 22px;
  @media (max-width: 375px) {
    width: 32px;
    height: 32px;
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
