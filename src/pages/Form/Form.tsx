import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Input, Layout } from '../../components';
import { $form } from '../../services';

import fields from './fields';
import * as S from './styled';

type Route = {
  params: {
    code: string;
  };
};

type Payload = {
  code: string;
  name: string;
  sector: string;
  userName: string;
  userRegistry: string;
};

export default function FormPage() {
  const navigator = useNavigation();
  const { params } = useRoute() as Route;
  const [, setLoading] = useState(false);
  const [, setWarning] = useState('');
  const [payload, setPayload] = useState<Payload>({
    code: '',
    name: '',
    sector: '',
    userName: '',
    userRegistry: '',
  });

  useEffect(() => {
    setPayload((prev) => ({ ...prev, code: params.code }));
  }, [params.code]);

  navigator.setOptions({ title: 'Registrar Item' });
  return (
    <Layout container>
      <>
        <ScrollView>
          {fields.map(({ label, name, placeholder, ...rest }) => (
            <Input
              blurOnSubmit
              key={name}
              label={label}
              placeholder={placeholder}
              value={payload[name]}
              onChange={$form.inputHandler(setPayload, name)}
              {...rest}
            />
          ))}
          <S.Footer>
            <S.SubmitButton
              onPress={$form.submitHandler(
                setLoading,
                setWarning,
                navigator.navigate,
                payload,
              )}
            >
              <S.SubmitLabel>Registrar Item</S.SubmitLabel>
            </S.SubmitButton>
            <S.Warning>* campos requeridos</S.Warning>
          </S.Footer>
        </ScrollView>
      </>
    </Layout>
  );
}
