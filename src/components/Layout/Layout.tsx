import React from 'react';

import * as S from './styled';

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return <S.Layout>{children}</S.Layout>;
}
