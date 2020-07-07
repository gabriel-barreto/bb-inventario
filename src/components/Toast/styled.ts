import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Toast = styled.View`
  align-self: center;
  align-items: center;
  bottom: 32px;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 32px;
  padding: 16px 16px 16px 24px;
  position: absolute;
  width: 80%;

  elevation: 8;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.8;
  shadow-radius: 8px;
`;

export const SuccessToast = styled(Toast)`
  background-color: ${({ theme }) => theme.colors.success.hex()};
`;

export const ErrorToast = styled(Toast)`
  background-color: ${({ theme }) => theme.colors.error.hex()};
`;

export const Close = styled(RectButton)`
  align-items: center;
  height: 44px;
  justify-content: center;
  width: 44px;
`;

export const CloseIcon = styled.Text`
  color: ${({ theme }) => theme.colors.lightest.hex()};
  font-size: ${({ theme }) => theme.sizes.normal};
  text-align: center;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.lightest.hex()};
  flex-shrink: 1;
  font-size: ${({ theme }) => theme.sizes.normal};
  line-height: 22px;
  margin: 0 16px 0 0;
`;
