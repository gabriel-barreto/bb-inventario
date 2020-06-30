import styled from 'styled-components/native';

export const Prop = styled.View`
  padding: 0 0 24px 0;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.dark.alpha(0.64)};
  font-size: ${({ theme }) => theme.sizes.normal};
  margin: 0 0 2px 0;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.darkest.hex()};
  font-size: ${({ theme }) => theme.sizes.normal};
`;
