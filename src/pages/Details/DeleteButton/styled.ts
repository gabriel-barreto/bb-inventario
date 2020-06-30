import styled from 'styled-components/native';

export const DeleteButton = styled.TouchableOpacity`
  align-items: center;
  flex: 1;
  justify-content: center;
  margin: 0 16px 0 0;
`;

export const Icon = styled.Text`
  color: ${({ theme }) => theme.colors.lightest.hex()};
`;
