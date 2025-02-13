import React from 'react';
import { Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
  RegisterWrapper,
  RegisterLabel,
  RegisterButton,
  RegisterButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <LogoWrapper>
        <Image source={logoImg} />
        <LogoText>SHOPI</LogoText>
      </LogoWrapper>

      <WelcomeText>Welcome Back,</WelcomeText>

      <SubText>Realize o login para continuar</SubText>

      <TextInput
        name="email"
        label="E-mail"
        keyboardType="email-address"
        returnKeyType="next"
      />

      <TextInput name="password" label="Senha" secureTextEntry />

      <ForgotPassword
        onPress={() => {
          console.log('esqueci a senha');
        }}
      >
        <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
      </ForgotPassword>

      <Button
        onPress={() => {
          navigation.navigate('Home');
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

      <RegisterWrapper>
        <RegisterLabel>É novo por aqui?</RegisterLabel>
        <RegisterButton
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <RegisterButtonText>Cadastre-se</RegisterButtonText>
        </RegisterButton>
      </RegisterWrapper>
    </Container>
  );
};

export default SignIn;
