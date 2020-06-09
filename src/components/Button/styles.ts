import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;

  background: #46ab99;
  border-radius: 5px;
  margin-bottom: 38px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  color: #ffffff;
  font-size: 18px;
`;
