import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return (
    <div>
      <Inputt
        width={props.width}
        height={props.height}
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
  width: ${(props) => props.width} 414px;
  height: ${(props) => props.height} 39px ;
  &:hover {
    border: 1px solid #828282;
    border-radius: 2px;
  }
  &:active{
    border: 1px solid #828282;
  }
  border: 1px solid #c4c4c4;
  border-radius: 2px;
  outline: none;
  &::placeholder {
    width: 70px;
    height: 19px;
    font-family: "Inter";
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
