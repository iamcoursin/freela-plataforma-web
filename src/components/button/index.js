import React from "react";
import { ContainerButton } from "./styles";

export const Button = ({ name, onClick }) => {
  return (
    <ContainerButton onClick={onClick}>
      {name}
    </ContainerButton>
  );
};