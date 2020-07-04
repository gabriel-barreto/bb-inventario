import faker from 'faker';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Layout } from '../../components';

import Item from './Item';
import SearchButton from './SearchButton';
import SearchForm from './SearchForm';
import * as S from './styled';

export default function ListPage() {
  const navigation = useNavigation();
  const [searching, setSearching] = useState(false);
  const [filter, setFilter] = useState<string | null>(null);
  const [items, _] = useState(
    Array.from({ length: 16 }, () => ({
      id: faker.random.uuid(),
      title: faker.lorem.words(faker.random.number({ min: 2, max: 4 })),
      sector: faker.lorem.words(faker.random.number({ min: 1, max: 3 })),
      code: faker.random.number({ max: 999999 }).toString().padStart(6, '0'),
    })),
  );

  function onItemPress(itemId: string) {
    navigation.navigate('Details', { itemId });
  }

  function openReader() {
    navigation.navigate('Reader');
  }

  function onSearchInput(term: string) {
    setFilter(term);
  }

  function onSearchHidden() {
    setFilter(null);
    setSearching(false);
  }

  navigation.setOptions({
    title: 'BB Inventário',
    headerRight: function HeaderRight() {
      if (searching) {
        return <SearchForm onInput={onSearchInput} onHide={onSearchHidden} />;
      }
      return <SearchButton onPress={() => setSearching(true)} />;
    },
  });

  return (
    <Layout>
      <>
        <S.ItemsList>
          {items
            .filter((each) => {
              if (!filter) return true;
              return new RegExp(filter, 'i').test(each.title);
            })
            .map((each) => (
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
