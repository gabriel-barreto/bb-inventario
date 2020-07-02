import styled from 'styled-components/native';

export const ActionFloating = styled.TouchableHighlight`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary.hex()};
  border-radius: 32px;
  bottom: 16px;
  height: 64px;
  justify-content: center;
  position: absolute;
  right: 16px;
  width: 64px;

  elevation: 4;
  shadow-color: #000;
  shadow-offset: 0px 3px;
  shadow-opacity: 0.64;
  shadow-radius: 6px;
`;

export const ActionIcon = styled.Text`
  color: ${({ theme }) => theme.colors.lightest.hex()};
`;

export const ItemsList = styled.ScrollView`
  padding: 8px 0;
`;
