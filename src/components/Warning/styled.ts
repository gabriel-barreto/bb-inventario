import styled from 'styled-components/native';

export const Warning = styled.Text`
  color: ${({ theme }) => theme.colors.dark.alpha(0.48)};
  font-size: ${({ theme }) => theme.sizes.normal};
  text-align: center;
`;
