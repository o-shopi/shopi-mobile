import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';
import Badge from '../../components/Badge';

import {
  Container,
  LogoText,
  LogoWrapper,
  TextInput,
  WelcomeText,
  SubText,
  ForgotPassword,
  ForgotPasswordText,
  DividerWrapper,
  LineGray,
  DividerText,
  ChipDivider,
} from './styles';

const SignIn: React.FC = () => (
  <Container>
    <LogoWrapper>
      <Image source={logoImg} />
      <LogoText>SHOPI</LogoText>
    </LogoWrapper>

    <WelcomeText>Welcome Back,</WelcomeText>

    <SubText>Realize o login para continuar</SubText>

    <TextInput name="email" label="E-mail" />

    <TextInput name="password" label="Senha" />

    <ForgotPassword
      onPress={() => {
        console.log('esqueci a senha');
      }}
    >
      <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
    </ForgotPassword>

    <Button
      onPress={() => {
        console.log('login');
      }}
    >
      Login
    </Button>

    <DividerWrapper>
      <LineGray />
      <DividerText>OU</DividerText>
      <LineGray />
    </DividerWrapper>

    <ChipDivider>
      <Badge color="blue">Facebook</Badge>
      <Badge color="red">Google</Badge>
    </ChipDivider>
  </Container>
);

export default SignIn;
