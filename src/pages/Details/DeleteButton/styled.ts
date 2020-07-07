import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin: 0 16px 0 0;
  justify-content: flex-end;
`;

export const DeleteButton = styled.TouchableOpacity`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const Icon = styled.Text`
  color: ${({ theme }) => theme.colors.lightest.hex()};
`;
