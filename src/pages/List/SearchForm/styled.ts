import styled from 'styled-components/native';

export const SearchForm = styled.View`
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  min-width: 200px;
  padding: 0 16px;
  width: 100%;
`;

export const HideButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 0 0 0 8px;
  width: 32px;
`;

export const ButtonIcon = styled.Text`
  color: ${({ theme }) => theme.colors.lightest.hex()};
`;

export const Field = styled.TextInput`
  background-color: transparent;
  border-bottom-color: ${({ theme }) => theme.colors.lightest.hex()};
  border-bottom-width: 1px;
  color: ${({ theme }) => theme.colors.lightest.hex()};
  font-size: ${({ theme }) => theme.sizes.normal};
  width: 100%;
`;
