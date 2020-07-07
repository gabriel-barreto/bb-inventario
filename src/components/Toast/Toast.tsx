import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import * as S from './styled';

type Props = {
  children: string;
  variant: 'error' | 'success';
  onClose: () => void;
};

export default function Toast({ children, variant, onClose }: Props) {
  const Theme = variant === 'success' ? S.SuccessToast : S.ErrorToast;
  return (
    <Theme>
      <S.Message>{children}</S.Message>
      <S.Close onPress={onClose}>
        <S.CloseIcon>
          <MaterialIcons name="close" size={20} />
        </S.CloseIcon>
      </S.Close>
    </Theme>
  );
}

Toast.defaultProps = { variant: 'success' };
