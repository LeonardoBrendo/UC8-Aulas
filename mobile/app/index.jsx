import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import api from '../api/api';

export default function ProfissionalList() {
  const [profissionais, setProfissionais] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = router.addListener?.('focus', listar);
    listar();
    return unsubscribe;
  }, []);

  const listar = async () => {
    try {
      const res = await api.get('/profissionais');
      setProfissionais(res.data);
    } catch (error) {
      console.error('Erro ao listar profissionais:', error);
    }
  };

  const excluir = async (matricula) => {
    try {
      await api.delete(`/profissionais/${matricula}`);
      listar();
    } catch (error) {
      console.error('Erro ao excluir profissional:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text>Nome: {item.nome}</Text>
      <Text>Profissão: {item.profissao}</Text>
      <Text>Salário: R$ {item.salario}</Text>
      <Text>Setor: {item.setor}</Text>
      <Text>Cidade: {item.cidade} - {item.estado}</Text>
      <Button title="Editar" onPress={() => router.push({ pathname: '/form', params: { profissional: JSON.stringify(item) } })} />
      <Button title="Excluir" onPress={() => excluir(item.matricula)} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Button title="Novo Profissional" onPress={() => router.push('/form')} />
      <FlatList
        data={profissionais}
        keyExtractor={item => item.matricula.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
