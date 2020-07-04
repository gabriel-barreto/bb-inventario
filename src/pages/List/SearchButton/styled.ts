import styled from 'styled-components/native';

export const SearchButton = styled.TouchableOpacity`
  align-items: center;
  margin: 0 16px 0 0;
  justify-content: center;
`;

export const Icon = styled.Text`
  color: ${({ theme }) => theme.colors.lightest.hex()};
`;
