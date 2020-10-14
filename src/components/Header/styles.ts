import styled from 'styled-components/native';
import { Animated, ViewProps } from 'react-native';

interface HeaderProps extends ViewProps {
  scrollY?: Animated.Value;
}

export const Container = styled.View`
  width: 100%;
  padding: 0 21px;
  border-width: 4px;
  border-color: #46ab96;
  background-color: #46ab96;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`;

export const SearchBar = styled.View`
  width: 100%;
  height: 38px;

  background-color: #fff;
  border-radius: 20px;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  margin: 33px 0 20px;
  padding: 0 20px;
`;

export const SearchBarTextInput = styled.TextInput`
  font-family: 'Ubuntu-Regular';
  font-size: 13px;
  color: #737373;
`;
