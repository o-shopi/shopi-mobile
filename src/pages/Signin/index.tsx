import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import { Container, LogoText, LogoWrapper } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <LogoWrapper>
      <Image source={logoImg} />
      <LogoText>SHOPI</LogoText>
    </LogoWrapper>
  </Container>
);

export default SignIn;
