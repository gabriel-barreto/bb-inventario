import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin: 40px 0 0 0;
  width: 100%;
`;

export const Warning = styled.Text`
  color: ${({ theme }) => theme.colors.dark.alpha(0.48)};
  font-size: ${({ theme }) => theme.sizes.lg};
  margin: 12px 0 0 0;
`;

export const SubmitButton = styled(RectButton)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary.hex()};
  height: 64px;
  justify-content: center;
  width: 100%;
`;

export const SubmitLabel = styled.Text`
  font-size: ${({ theme }) => theme.sizes.normal};
  color: ${({ theme }) => theme.colors.lightest.hex()};
  text-transform: uppercase;
`;
