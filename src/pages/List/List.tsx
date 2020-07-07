import React, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Layout, Loader, Warning } from '../../components';
import { $items } from '../../services';

import FloatingAction from './FloatingAction';
import Item from './Item';
import SearchButton from './SearchButton';
import SearchForm from './SearchForm';

import * as S from './styled';

type Item = {
  code: string;
  id: string;
  name: string;
  sector: string;
};

export default function ListPage() {
  const navigation = useNavigation();
  const [searching, setSearching] = useState(false);
  const [filter, setFilter] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);

  function onItemPress(itemId: string) {
    navigation.navigate('Details', { itemId });
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
  });

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      $items
        .list()
        .then((docs) => {
          console.tron.log(docs);
          setItems(docs);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []),
  );

  if (loading) {
    return (
      <Layout>
        <>
          <Loader label="Procurando Itens..." />
          <FloatingAction />
        </>
      </Layout>
    );
  }

  if (items.length < 1) {
    return (
      <Layout container>
        <>
          <Warning>Nenhum item registrado!</Warning>
          <FloatingAction />
        </>
      </Layout>
    );
  }

  navigation.setOptions({
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
            .filter(({ name }) => {
              if (!filter) return true;
              return new RegExp(filter, 'i').test(name);
            })
            .map((each) => (
              <Item
                {...each}
                key={each.id}
                onPress={() => onItemPress(each.id)}
              />
            ))}
        </S.ItemsList>
        <FloatingAction />
      </>
    </Layout>
  );
}
