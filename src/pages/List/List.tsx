import faker from 'faker';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Layout } from '../../components';

import Item from './Item';
import * as S from './styled';

export default function ListPage() {
  const navigation = useNavigation();
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
    navigation.navigate('Details', { itemId });
  }

  function openReader() {
    navigation.navigate('Reader');
  }

  navigation.setOptions({
    title: 'BB Inventário',
  });

  return (
    <Layout>
      <>
        <S.ItemsList>
          {items.map((each) => (
            <Item
              {...each}
              key={each.id}
              onPress={() => onItemPress(each.id)}
            />
          ))}
        </S.ItemsList>
        <S.ActionFloating underlayColor="#1b447e" onPress={openReader}>
          <S.ActionIcon>
            <MaterialIcons name="add" size={32} />
          </S.ActionIcon>
        </S.ActionFloating>
      </>
    </Layout>
  );
}
