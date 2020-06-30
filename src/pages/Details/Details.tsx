import faker from 'faker';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Layout } from '../../components';

import DeleteButton from './DeleteButton';
import Prop from './Prop';

export default function DetailsPage() {
  const navigation = useNavigation();

  navigation.setOptions({
    title: 'Detalhes',
    headerRight: function HeaderRight() {
      return <DeleteButton />;
    },
  });

  const item = {
    code: faker.random.number(999999).toString().padStart(6, '0'),
    name: faker.lorem.words(faker.random.number({ min: 2, max: 6 })),
    sector: faker.lorem.words(faker.random.number({ min: 1, max: 3 })),
    user: {
      name: faker.name.findName(),
      registry: faker.random.number(999999).toString().padEnd(6, '0'),
    },
  };

  return (
    <Layout container>
      <>
        <Prop label="Identificação do Item:" value={item.name} />
        <Prop label="Código Patrimonial:" value={item.code} />
        <Prop label="Setor:" value={item.sector} />
        <Prop label="Funcionário:" value={item.user.name} />
        <Prop label="Matrícula do Funcionário" value={item.user.registry} />
      </>
    </Layout>
  );
}
