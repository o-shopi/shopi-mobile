import React from 'react';

import { Image } from 'react-native';
import { Container, ImageContainer, SearchBar, SearchbarText } from './styles';

import iconMenuImg from '../../assets/icone-menu.png';
import logoImg from '../../assets/logo-white.png';
import qrcodeImg from '../../assets/codigo-qr.png';

const Header: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          source={iconMenuImg}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />

        <Image
          source={logoImg}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />

        <Image
          source={qrcodeImg}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
      </ImageContainer>

      <SearchBar>
        <SearchbarText>Camisas</SearchbarText>
        <Image
          source={qrcodeImg}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
      </SearchBar>
    </Container>
  );
};

export default Header;
