import styled from 'styled-components/native';

import { TextInputProps } from 'react-native-paper/lib/typescript/src/components/TextInput/TextInput';

interface InputProps extends TextInputProps {
  name: string;
}

export const Container = styled.View`
  flex: 1;

  padding: 0 32px;
`;
