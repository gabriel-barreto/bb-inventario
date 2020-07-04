import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Input, Layout } from '../../components';
import fields from './fields';

type Route = {
  params: {
    code: string;
  };
};

export default function FormPage() {
  const navigator = useNavigation();
  const { params } = useRoute() as Route;
  const [payload, setPayload] = useState<Record<string, string>>({
    code: '',
    name: '',
    sector: '',
    userName: '',
    userRegistry: '',
  });

  function onInput(name: string, value: string) {
    setPayload((prev) => ({ ...prev, [name]: value }));
    console.tron.log(payload);
  }

  useEffect(() => {
    setPayload((prev) => ({ ...prev, code: params.code }));
  }, [params.code]);

  navigator.setOptions({ title: 'Registrar Item' });
  return (
    <Layout container>
      <ScrollView>
        {fields.map(({ label, name, placeholder, ...rest }) => (
          <Input
            blurOnSubmit
            key={name}
            label={label}
            placeholder={placeholder}
            value={payload[name]}
            onChange={(value) => onInput(name, value)}
            {...rest}
          />
        ))}
      </ScrollView>
    </Layout>
  );
}
