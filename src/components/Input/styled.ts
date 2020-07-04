import styled from 'styled-components/native';

export const Input = styled.View`
  flex-direction: column;
  margin: 0 0 32px 0;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.darkest.hex()};
  font-size: 16px;
  margin: 0 0 6px 0;
`;

export const Field = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.light.alpha(0.64)};
  border: 1px solid ${({ theme }) => theme.colors.dark.alpha(0.1)};
  color: ${({ theme }) => theme.colors.dark.hex()};
  font-size: 16px;
  padding: 10px 16px;
  min-height: 48px;
`;
