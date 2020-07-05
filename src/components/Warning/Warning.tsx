import React from 'react';

import * as S from './styled';

type Props = {
  children: string;
};

export default function Warning({ children }: Props) {
  return <S.Warning>{children}</S.Warning>;
}
