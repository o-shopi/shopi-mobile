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
