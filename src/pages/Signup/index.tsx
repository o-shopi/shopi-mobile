import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
  SafeAreaView,
} from 'react-native';
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
  DividerWrapper,
  LineGray,
  DividerText,
  ChipDivider,
  RegisterWrapper,
  RegisterLabel,
  RegisterButton,
  RegisterButtonText,
  InputDivider,
  SmallTextInput,
  LoginButtonsWrapper,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <Container>
            <LogoWrapper>
              <Image source={logoImg} />
              <LogoText>SHOPI</LogoText>
            </LogoWrapper>

            <View style={{ width: '100%' }}>
              <WelcomeText>Cadastro</WelcomeText>

              <SubText>Complete o cadastro para continuar</SubText>
            </View>

            <InputDivider>
              <SmallTextInput name="firstName" label="Nome" />
              <SmallTextInput name="lastName" label="Sobrenome" />
            </InputDivider>

            <TextInput name="email" label="E-mail" />

            <TextInput name="password" label="Senha" />

            <TextInput name="confirmPassword" label="Confirmar senha" />

            <Button
              onPress={() => {
                console.log('Avançar');
              }}
            >
              Avançar
            </Button>
          </Container>
        </KeyboardAvoidingView>
        <LoginButtonsWrapper>
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
            <RegisterLabel>Já é cadastrado?</RegisterLabel>

            <RegisterButton
              onPress={() => {
                navigation.navigate('SignIn');
              }}
            >
              <RegisterButtonText>Login</RegisterButtonText>
            </RegisterButton>
          </RegisterWrapper>
        </LoginButtonsWrapper>
      </ScrollView>
    </>
  );
};

export default SignUp;
