import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return (
    <div>
      <Inputt
        style={{
          width: props.width,
          height: props.height,
          backgroundColor: props.backgroundColor,
        }}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
      />
    </div>
  );
};

export default Input;

const Inputt = styled.input`
  border: 1px solid #c4c4c4;
  border-radius: 2px;
  outline: none;
  &::placeholder {
    width: 70px;
    height: 19px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #c4c4c4;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;
