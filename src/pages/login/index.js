import React from "react";
import {
  Button,
  Container, 
  Form,
  FormularioContainer,
  Input,
  Label,
  MensagemErro,
  StyledLink,
  SubTitulo,
  Titulo,
} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("O campo e-mail é inválido")
    .required("Campo obrigatório"),
  senha: yup
    .string()
    .required("O campo Senha é obrigatório")
    .min(4, "A senha deve ter no min 4 caracteres"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const navigate = useNavigate();

  const handleLogin = (dados) => {
    console.log(dados);
    return navigate("/");
  };

  return (
    <Container>
      <SubTitulo>Lucre assistindo anúncios</SubTitulo>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <FormularioContainer>
          <Titulo>Login</Titulo>
          <Label>Email</Label>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            {...register("email")}
          />
          <MensagemErro>{errors.email?.message}</MensagemErro>
          <Label>Senha</Label>
          <Input
            placeholder="Senha"
            type="password"
            name="senha"
            {...register("senha")}
          />
          <MensagemErro>{errors.senha?.message}</MensagemErro>

          <Button type="submit">entrar</Button>
        </FormularioContainer>
      </Form>
      <SubTitulo>
        Novo na plataforma?{" "}
        <StyledLink to="/cadastre-se">Registre-se</StyledLink>
      </SubTitulo>
    </Container>
  );
};

export default Login;
