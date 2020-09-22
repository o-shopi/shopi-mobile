import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';

import { Container, Image, CategoryTitle } from './styles';

import shirtImg from '../../assets/tshirt.png';
import burgerImg from '../../assets/burger.png';
import gameImg from '../../assets/wii-controller.png';
import furnitureImg from '../../assets/furniture.png';
import balloonImg from '../../assets/hot-air-balloon.png';

interface CategoryProps extends TouchableOpacityProps {
  img: 'shirt' | 'balloon' | 'game' | 'furniture' | 'burger';
}

const Category: React.FC<CategoryProps> = ({ img, children, ...rest }) => {
  let currentImg;

  switch (img) {
    case 'shirt':
      currentImg = shirtImg;
      break;
    case 'balloon':
      currentImg = balloonImg;
      break;
    case 'game':
      currentImg = gameImg;
      break;
    case 'furniture':
      currentImg = furnitureImg;
      break;
    default:
      currentImg = burgerImg;
      break;
  }

  return (
    <Container {...rest}>
      <Image source={currentImg} />
    </Container>
  );
};

export default Category;
