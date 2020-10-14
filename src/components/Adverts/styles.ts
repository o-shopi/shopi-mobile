import styled, { css } from 'styled-components/native';

interface ContainerProps {
  color?: 'red' | 'blue';
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 168px;
  height: 39px;

  border-radius: 100px;
  margin-bottom: 38px;
  padding-left: 8px;
  padding-right: 8px;

  justify-content: center;
  align-items: center;
  flex-direction: row;

  ${(props) =>
    props.color === 'blue' &&
    css`
      background-color: #3b5998;
    `}

  ${(props) =>
    props.color === 'red' &&
    css`
      background-color: #eb4132;
    `}
`;

export const ButtonText = styled.Text`
  font-family: 'Ubuntu-Bold';
  color: #ffffff;
  font-size: 18px;
  flex: 1;
  text-align: center;
`;

export const Image = styled.Image`
  /* margin-right: auto; */
`;
