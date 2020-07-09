import React from 'react';

import { Layout, Toast } from '../../../components';
import FloatingAction from './FloatingAction';

type Props = {
  codes: string[];
  container: boolean;
  toast: {
    visible: boolean;
    message: string;
    variant: 'error' | 'success';
    onClose: () => void;
  };
  children: JSX.Element;
};

export default function BaseLayout({
  children,
  codes,
  container,
  toast,
}: Props) {
  return (
    <Layout container={container}>
      <>
        {children}

        <FloatingAction codes={codes} />

        {toast.visible ? (
          <Toast variant={toast.variant} onClose={toast.onClose}>
            {toast.message}
          </Toast>
        ) : null}
      </>
    </Layout>
  );
}

BaseLayout.defaultProps = { container: false };
