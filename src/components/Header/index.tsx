import React from 'react';

import { Image, ViewProps, Animated, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ImageContainer,
  SearchBar,
  SearchBarTextInput,
} from './styles';

import iconMenuImg from '../../assets/icone-menu.png';
import logoImg from '../../assets/logo-white.png';
import qrcodeImg from '../../assets/codigo-qr.png';
import loupeImg from '../../assets/loupe.png';

const Header: React.FC = ({ ...rest }) => {
  const navigation = useNavigation();

  return (
    <Container {...rest}>
      <ImageContainer>
        <Image
          source={iconMenuImg}
          style={{ width: 28, height: 28 }}
          resizeMode="contain"
        />

        <Image
          source={logoImg}
          style={{ width: 35, height: 35 }}
          resizeMode="contain"
        />

        <Image
          source={qrcodeImg}
          style={{ width: 28, height: 28 }}
          resizeMode="contain"
        />
      </ImageContainer>

      <SearchBar>
        <SearchBarTextInput
          placeholder="Busque o produto desejado"
          onSubmitEditing={() => {
            navigation.navigate('Search');
          }}
        />
        <Image
          source={loupeImg}
          style={{ width: 13, height: 13 }}
          resizeMode="contain"
        />
      </SearchBar>
    </Container>
  );
};

export default Header;
