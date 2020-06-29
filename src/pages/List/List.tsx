import faker from 'faker';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Layout } from '../../components';

import Item from './Item';

export default function ListPage() {
  const navigate = useNavigation();
  const items = Array.from(
    // { length: faker.random.number({ min: 4, max: 16 }) },
    { length: 16 },
    () => ({
      id: faker.random.uuid(),
      title: faker.lorem.words(faker.random.number({ min: 2, max: 4 })),
      sector: faker.lorem.words(faker.random.number({ min: 1, max: 3 })),
      code: faker.random.number({ max: 999999 }).toString().padStart(6, '0'),
    }),
  );

  function onItemPress(itemId: string) {
    console.tron.log('Pressed Item: ', itemId);
  }

  navigate.setOptions({
    title: 'BB Inventário',
  });

  return (
    <Layout>
      <>
        {items.map((each) => (
          <Item {...each} key={each.id} onPress={() => onItemPress(each.id)} />
        ))}
      </>
    </Layout>
  );
}
