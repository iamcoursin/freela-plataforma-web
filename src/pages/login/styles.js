import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: #010000;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  align-items: center;
`;
export const Titulo = styled.h1`
  font-size: 2rem;
  align-self: center;
  text-shadow: 2px 2px black;
`;
export const SubTitulo = styled.h2`
  font-size: 1rem;
`;
export const Div = styled.div`
display: flex;
flex-direction: row;
margin: 1rem 0 ;

`;
export const Input = styled.input`
  color: #000;
  background: #eee;
  outline: none;
  border-radius: 3px;
  height: 1.4rem;
  border: none;
  padding: 0.7rem;
  &:focus {
    border: 1px solid black;
  }
`;
export const Checkbox = styled.input`
  width: 1.2rem;
  height: 1.2rem;

`;
export const MensagemErro = styled.span`
  color: red;
  font-weight:bold;
`;
export const StyledLink = styled(Link)`
text-decoration: none;
  color: #1ed760;
  &:hover,
  &:focus {
    color: #fff7;
  }
  &:active {
    color: #fff7;
  }
  
`;
export const Label = styled.label`
  color: #fff;
  font-weight: bold;
  text-shadow: 2px 2px black;
  margin-bottom: 0.4rem;
`;
export const Form = styled.form`
  display: flex;
  flex-dirrection: column;
  justify-content: center;
  align-items: center;
`;
export const FormularioContainer = styled.main`
  background: #1ed760;
  width: 20vw;
  padding: 2rem;
  border-radius: 8px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  
`;

export const Button = styled.button`
  text-transform: uppercase;
  border-radius: 4px;
  width: 7vw;
  font-weight: 700;
  height: 5vh;
  background: #fff;
  border: 1px solid black;
  color: #000;
  margin-top: 6vh;
  cursor: pointer;
  box-shadow: 2px 2px black;
  align-self: center;
  &:active {
    box-shadow: none;
  }
`;
