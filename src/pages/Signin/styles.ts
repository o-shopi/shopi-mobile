import styled from 'styled-components/native';
import { TextInput as MaterialTextInput } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 32px;
`;

export const LogoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LogoText = styled.Text`
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 2.4px;

  font-family: 'Roboto-Thin';
  margin: 8px 0 0 15px;
`;

export const TextInput = styled(MaterialTextInput)`
  width: 100%;
  background-color: #fff;
`;
