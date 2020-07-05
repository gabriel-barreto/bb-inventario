import styled from 'styled-components/native';

export const Loader = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const Spinner = styled.ActivityIndicator``;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.secondary.hex()};
  font-size: ${({ theme }) => theme.sizes.normal};
  margin: 16px 0 0 0;
`;
