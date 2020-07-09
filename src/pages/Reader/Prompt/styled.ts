import styled from 'styled-components/native';

export const Prompt = styled.Modal``;

export const Centered = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightest.alpha(0.96)};
  justify-content: center;
  flex: 1;
`;

export const Body = styled.View`
  background-color: ${({ theme }) => theme.colors.lightest.hex()};
  border-radius: 4px;
  padding: 32px 32px 16px 32px;
  width: 88%;

  elevation: 8;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.8;
  shadow-radius: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.darkest.hex()};
  font-size: ${({ theme }) => theme.sizes.strong};
  text-transform: uppercase;
  margin: 0 0 32px 0;
`;

export const Actions = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  margin: -8px 0 0 0;
`;

const PromptButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 8px;
`;

const ButtonLabel = styled.Text`
  font-size: ${({ theme }) => theme.sizes.strong};
  text-align: center;
  text-transform: uppercase;
`;

export const Submit = styled(PromptButton)``;

export const SubmitLabel = styled(ButtonLabel)`
  color: ${({ theme }) => theme.colors.secondary.hex()};
`;

export const Cancel = styled(PromptButton)`
  margin: 0 4px 0 0;
`;

export const CancelLabel = styled(ButtonLabel)`
  color: ${({ theme }) => theme.colors.dark.alpha(0.48)};
`;
