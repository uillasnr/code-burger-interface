import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import api from "../../services/api"

import {ErrorMessage } from "../../components";
import registerImg from "../../assets/Login.png"
import Logo from "../../assets/Logo1.png"

import {
  Container,
  RegiterImage,
  ContainerItens,
  Label,
  Input,
  ButtonLogin,
  SignInLink,

} from "./styles"


 function Regiter() {

  const schema = yup.object().shape({
    name: yup.string().required('O seu nome é obrigatòrio'),
    email: yup.string().email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup.string()
      .required('A senha e obrigatória')
      .min(6, 'A senha deve ter pelo 6 digitos'),
    confirmPassword: yup.string()
      .required('A senha e obrigatória')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })


  //conexão com api e o frontend
  const onSubmit = async clientData => {
    try {
      const { status } = await api.post("users", {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password
      },
        { validateStatus: () => true }
      )

      if (status === 200 || status === 201) {
        toast.success('Cadastro criado com sucesso!!')
        //{
        // position: 'top-right'
        // autoClose: 2000,
        // hideProgressBar: false,
        // closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        // progress: undefined
        //}
      } else if (status === 409) {
        toast.error('E-mail ja cadastrado, faça login para continuar!')
        // {
        //position: 'top-right'
        // autoClose: 2000,
        // hideProgressBar: false,
        // closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        // progress: undefined
        //}
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Serviço indisponível')
    }
  }



  return (
    <Container>

      <RegiterImage src={registerImg} alt="Regiter-img" />

      <ContainerItens>
        <img src={Logo} alt="Logo" />
        <h1>Cadastre-se</h1>

        <form onSubmit={handleSubmit(onSubmit)}>


          <Label error={errors.name?.message}>Nome</Label>
          <Input type="text" {...register('name')} error={errors.name?.message} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>


          <Label error={errors.email?.message}>Email</Label>
          <Input type="email" {...register('email')} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>


          <Label error={errors.password?.message}>Senha</Label>
          <Input type="password"{...register('password')} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>


          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input type="password"{...register('confirmPassword')} error={errors.confirmPassword?.message} />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <SignInLink>
          já possui conta ?  {' '}
          <Link style={{ color: 'white'}} to="/login">Login</Link>
        </SignInLink>

          <ButtonLogin type="submit" style={{ marginTop: 25, marginButtom: 25 }}>Cadastrar</ButtonLogin>
        </form>

     
      </ContainerItens>

    </Container>




  )
}
export default Regiter