import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Layout, Loader, Warning } from '../../components';
import { $items } from '../../services';

import DeleteButton from './DeleteButton';
import Prop from './Prop';

type Route = {
  params: {
    itemId: string;
  };
};

type Item = {
  code: string;
  id: string;
  name: string;
  sector: string;
  user: {
    name: string;
    registry: string;
  };
};

export default function DetailsPage() {
  const navigation = useNavigation();
  const { params } = useRoute() as Route;
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState<Item | null>(null);

  navigation.setOptions({
    title: 'Detalhes',
  });

  useEffect(() => {
    setLoading(true);
    $items
      .fetchOne(params.itemId)
      .then((doc) => {
        setItem(doc as Item);
        console.tron.log(doc);
      })
      .finally(() => setLoading(false));
  }, [params.itemId]);

  if (loading) {
    return (
      <Layout>
        <Loader label="Buscando item..." />
      </Layout>
    );
  }

  if (!item) {
    return (
      <Layout>
        <Warning>Item não encontrado!</Warning>
      </Layout>
    );
  }

  navigation.setOptions({
    headerRight: function HeaderRight() {
      return <DeleteButton />;
    },
  });
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
