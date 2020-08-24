import React from 'react';
import { BaseButtonProperties } from 'react-native-gesture-handler';

import facebookImg from '../../assets/facebook.png';
import googleImg from '../../assets/google.png';

import { Container, ButtonText, Image } from './styles';

interface ButtonProps extends BaseButtonProperties {
  children: string;
  color?: string;
}

const Badge: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <Image
        source={rest.color && rest.color === 'blue' ? facebookImg : googleImg}
      />
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Badge;
