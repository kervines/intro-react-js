import { MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";
import {
  Container,
  Row,
  Column,
  CriarText,
  EsqueciText,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./style";

import { IFormData } from "./types";

const schema = yup
  .object({
    email: yup
      .string()
      .email("email nao é valido")
      .required("Campo obrigatorio"),
    password: yup
      .string()
      .min(3, "No minimo 3 caracteres")
      .required("Campo obrigatorio"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("Email ou senha invalido");
      }
    } catch {
      alert("Houve um erro, tente novamente.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                control={control}
                errorMessage={errors?.email?.message}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                control={control}
                errorMessage={errors?.password?.message}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button
                title="Entrar"
                variant="secondary"
                // onClick={handleClickSignIn}
                type="submit"
              />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
