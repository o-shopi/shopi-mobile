import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { TextInputProps } from 'react-native-paper/lib/typescript/src/components/TextInput/TextInput';

interface InputProps extends TextInputProps {
  name: string;
}

export const Container = styled.View`
  flex: 1;

  padding: 0 32px;
`;

export const HomeWrapper = styled.View`
  background-color: #f8f8f8;
  border-radius: 15px;

  padding: 35px 12px 23px;

  top: -13px;
  z-index: 2;

  padding-bottom: 100px;
`;

export const CategoryWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* top: -13px; */

  height: 47px;
  padding: 16px 16px 0;
`;

export const AdvertsWrapper = styled.View`
  padding-top: 25px;
  margin-left: -36px;
`;

export const ShirtsCarouselTextWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const CarouselTitle = styled.Text`
  color: #363636;
  font-size: 18px;
  font-family: 'Ubuntu-Regular';
`;

export const CarouselSubTitle = styled.Text`
  color: #818181;
  font-size: 12px;
  font-family: 'Ubuntu-Regular';
`;

export const Image = styled.Image`
  width: 65px;
  height: 80px;
`;

export const ProductItem = styled.View`
  height: 100px;
  background-color: #fff;

  border-radius: 5px;

  padding: 0 25px 0 15px;
  margin-bottom: 9px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductDescriptionWrapper = styled.View`
  justify-content: space-between;
`;

export const ProductMall = styled.Text`
  color: #494949;
  font-size: 12px;
  font-family: 'Ubuntu-Regular';
`;

export const ProductStore = styled.Text`
  color: #494949;
  font-size: 12px;
  font-family: 'Ubuntu-Bold';

  margin: 10px 0;
`;

export const ProductName = styled.Text`
  color: #494949;
  font-size: 12px;
  font-family: 'Ubuntu-Regular';
`;

export const ProductActions = styled.View``;

export const ReserveButton = styled(RectButton)`
  width: 78px;
  height: 28px;

  background-color: #5eaabb;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
`;

export const ReserveButtonText = styled.Text`
  color: #fff;
  font-size: 11px;
  font-family: 'Ubuntu-Bold';
`;

export const PriceText = styled.Text`
  color: #232323;
  font-size: 12px;
  font-family: 'Ubuntu-Bold';
`;
