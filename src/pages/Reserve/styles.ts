import styled from 'styled-components/native';
import { TextInput as MaterialTextInput } from 'react-native-paper';

import { TextInputProps } from 'react-native-paper/lib/typescript/src/components/TextInput/TextInput';

interface InputProps extends TextInputProps {
  name: string;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  padding: 0 32px;

  background-color: #e7f3f1;
  height: 800px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 34px;
  height: 34px;

  position: absolute;
  left: 15px;
  top: 5px;

  justify-content: center;
  align-items: center;

  background-color: #fefefe;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;
