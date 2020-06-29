import styled from 'styled-components/native';

export const Item = styled.TouchableNativeFeedback``;

export const Container = styled.View`
  align-items: center;
  flex: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 24px 32px;
`;

export const Body = styled.View`
  padding: 0 24px 0 0;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.darkest.hex()};
  font-size: ${({ theme }) => theme.sizes.normal};
  margin: 0 0 2px 0;
`;

export const Details = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Detail = styled.Text`
  color: ${({ theme }) => theme.colors.darkest.alpha(0.64)};
  font-size: ${({ theme }) => theme.sizes.lg};
  margin: 0 10px 0 0;
`;

export const Icon = styled.Text``;
