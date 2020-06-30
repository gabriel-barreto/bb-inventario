import React from 'react';

import * as S from './styled';

type Props = {
  children: JSX.Element;
  container?: boolean;
};

export default function Layout({ children, container }: Props) {
  if (container) return <S.ContainerLayout>{children}</S.ContainerLayout>;
  return <S.Layout>{children}</S.Layout>;
}

Layout.defaultProps = { container: false };
