import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from '../../hooks/UserContext';

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from './styles';
import Logo from '../../assets/logo.svg';
import { Button } from '../../components/button';

export function Login() {
  const { putUserData, userData } = useUser();
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
      password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    try {
      const response = await toast.promise(
        api.post('/sessions', {
          email: formData.email,
          password: formData.password,
        }),
        {
          pending: 'Verificando seus dados',
          success: {
            render() {
              setTimeout(() => {
                navigate('/');
              }, 2000);
              return 'Seja Bem-vindo';
            },
          },
          error: 'Email ou Senha incorretos',
        }
      );

      // O `response.data` contém os dados do usuário
      putUserData(response.formData);
      navigate('/')

    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo=devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao<span> Dev Burguer!</span>
          <br /> Acesse com seu <span> Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer >
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>
        <p>Não possui conta? <Link to="/cadastro">Clique aqui. </Link></p>
      </RightContainer>
    </Container>
  );
}
