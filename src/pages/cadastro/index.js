import React from 'react'
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

const schemaRegistro = yup.object().shape({
  nome: yup
    .string()
    .required("Campo obrigatório"),
  email: yup
    .string()
    .email("O campo e-mail é inválido")
    .required("Campo obrigatório"),
  senha: yup
    .string()
    .required("O campo Senha é obrigatório")
    .min(8, "A senha deve ter no min 8 caracteres"),
  senhaConfirmacao: yup
    .string()
    .required("Preencha este campo")
    .min(8, "A senha deve ter no min 8 caracteres"),
});


 const Cadastro = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegistro),
  })

  const navigate = useNavigate();

  const handleRegistrar = (dados) => {
    console.log(dados)
    return navigate('/login');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleRegistrar)}>
        <FormularioContainer>
          <Titulo>Registrar</Titulo>
          <Label>Nome</Label>
          <Input
            placeholder="Nome"
            type="text"
            name="nome"
            {...register("nome")}
          />
          <MensagemErro>{errors.nome?.message}</MensagemErro>
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
          <Label>Confirmar senha</Label>
          <Input
            placeholder="Confirmar senha"
            type="password"
            name="senhaConfirmacao"
            {...register("senhaConfirmacao")}
          />
          <MensagemErro>{errors.senhaConfirmacao?.message}</MensagemErro>
          <Button type="submit">Criar</Button>
        </FormularioContainer>
      </Form>
      <SubTitulo>
        Já é registrado?{" "}
        <StyledLink to="/login">Entrar</StyledLink>
      </SubTitulo>
    </Container>
  );
};

export default Cadastro;
