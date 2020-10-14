import styled from 'styled-components/native';
import { TextInput as MaterialTextInput } from 'react-native-paper';

import { TextInputProps } from 'react-native-paper/lib/typescript/src/components/TextInput/TextInput';

interface InputProps extends TextInputProps {
  name: string;
}

export const PageControls = styled.View`
  width: 100%;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  background-color: transparent;

  position: absolute;
  padding: 12px 16px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 34px;
  height: 34px;

  justify-content: center;
  align-items: center;

  background-color: #fff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export const QrCodeButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;

  justify-content: center;
  align-items: center;

  background-color: #fff;
  border-radius: 10px;
`;

export const ProductInfoCard = styled.View`
  background-color: #fff;
  flex: 1;
  border-radius: 15px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  padding: 21px 21px 0;

  top: -28px;
  z-index: 2;
`;

export const ProductTitleWrapper = styled.View`
  flex-direction: row;

  justify-content: space-between;
`;

export const ProductTitle = styled.Text`
  color: #292929;
  font-family: 'Ubuntu-Regular';
  font-size: 24px;
`;

export const ShoppingInfoText = styled.Text`
  font-size: 18px;
  font-family: 'Ubuntu-Regular';
  color: #7e7e7e;

  margin-top: 9px;
`;

export const SelectionBlock = styled.View`
  justify-content: center;
  align-items: center;

  padding: 15px 0 5px;
  margin-bottom: 10px;
`;

export const SelectionBlockTitle = styled.Text`
  font-size: 16px;
  color: #7e7e7e;
  font-family: 'Ubuntu-Regular';

  margin-bottom: 9px;
`;

export const SelectBullet = styled.View`
  width: 34px;
  height: 34px;

  border-width: 1px;
  border-color: #61a899;
  border-radius: 20px;

  background-color: #ee5353;
`;

export const ProductDetailsText = styled.Text`
  padding: 0 0 15px 10px;
  color: #7e7e7e;
`;

export const ReserveButton = styled.TouchableOpacity`
  height: 78px;
  top: -10px;
  justify-content: center;
  background-color: #61a899;
`;

export const ReserveButtonText = styled.Text`
  color: #fff;
  font-family: 'Ubuntu-Regular';
  font-size: 24px;
  letter-spacing: 0.8px;

  text-align: center;
`;
