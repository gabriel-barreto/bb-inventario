import React, { useCallback, useEffect, useState } from 'react';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { Loader, Warning } from '../../components';
import { $items } from '../../services';

import BaseLayout from './BaseLayout';
import Item from './Item';
import SearchButton from './SearchButton';
import SearchForm from './SearchForm';

import * as S from './styled';

type Route = {
  params: {
    message?: string;
  };
};

type Item = {
  code: string;
  id: string;
  name: string;
  sector: string;
};

type Toast = {
  message: string;
  visible: boolean;
  variant: 'error' | 'success';
};

export default function ListPage() {
  const navigation = useNavigation();
  const { params } = useRoute() as Route;
  const [toast, setToast] = useState<Toast>({
    message: '',
    variant: 'success',
    visible: false,
  });
  const [searching, setSearching] = useState(false);
  const [filter, setFilter] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [codes, setCodes] = useState<string[]>([]);

  function onToastCloses() {
    setToast((prev) => ({ ...prev, message: '', visible: false }));
    params.message = '';
  }

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

  function fetchItems() {
    setLoading(true);
    $items
      .list()
      .then(setItems)
      .finally(() => {
        setLoading(false);
      });
  }

  function showToast() {
    if (params && params.message) {
      setToast((prev) => ({ ...prev, ...params, visible: true }));
    }
  }

  navigation.setOptions({
    title: 'BB Inventário',
  });

  useFocusEffect(
    useCallback(() => {
      fetchItems();
    }, []),
  );

  useEffect(() => {
    showToast();
  }, [params]);

  useEffect(() => {
    if (items.length) {
      setCodes(items.map(({ code }) => code));
    }
  }, [items]);

  if (loading) {
    return (
      <BaseLayout toast={{ ...toast, onClose: onToastCloses }} codes={codes}>
        <Loader label="Procurando Itens..." />
      </BaseLayout>
    );
  }

  if (items.length < 1) {
    return (
      <BaseLayout
        container
        toast={{ ...toast, onClose: onToastCloses }}
        codes={codes}
      >
        <Warning>Nenhum item registrado!</Warning>
      </BaseLayout>
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
    <BaseLayout toast={{ ...toast, onClose: onToastCloses }} codes={codes}>
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
    </BaseLayout>
  );
}
