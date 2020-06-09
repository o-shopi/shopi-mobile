import styled from 'styled-components/native';
import { TextInput as MaterialTextInput } from 'react-native-paper';

import { TextInputProps } from 'react-native-paper/lib/typescript/src/components/TextInput/TextInput';

interface InputProps extends TextInputProps {
  name: string;
}

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

  margin-bottom: 40px;
`;

export const LogoText = styled.Text`
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 2.4px;

  font-family: 'Roboto-Thin';
  margin: 8px 0 0 15px;
`;

export const TextInput = styled(MaterialTextInput)<InputProps>`
  width: 100%;
  background-color: #fff;
`;

export const WelcomeText = styled.Text`
  font-family: 'Ubuntu-Regular';
  font-size: 36px;
  margin-bottom: 7px;
  align-self: flex-start;
`;

export const SubText = styled.Text`
  font-family: 'Ubuntu-Regular';
  font-size: 16px;
  color: #747474;
  margin-bottom: 62px;
  align-self: flex-start;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin: 24px 0 37px;
  align-self: flex-end;
`;

export const ForgotPasswordText = styled.Text`
  color: #626262;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;
