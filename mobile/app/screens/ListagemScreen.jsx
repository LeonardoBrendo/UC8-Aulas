// app/ListagemScreen.jsx
import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../api/api';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { colors, fonts } from '../constants/theme';

export default function ListagemScreen() {
  const navigation = useNavigation();
  const [profissionais, setProfissionais] = useState([]);

  const carregar = async () => {
    try {
      const resposta = await api.get('/profissionais');
      setProfissionais(resposta.data);
    } catch (erro) {
      console.error('Erro ao carregar profissionais:', erro);
      Alert.alert('Erro', 'Não foi possível carregar os profissionais.');
    }
  };

  useFocusEffect(
    useCallback(() => {
      carregar();
    }, [])
  );

  const excluir = async (matricula) => {
    try {
      await api.delete(`/profissionais/${matricula}`);
      carregar(); // atualiza lista após exclusão
    } catch (erro) {
      console.error('Erro ao excluir profissional:', erro);
      Alert.alert('Erro', 'Não foi possível excluir o profissional.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.profissao}>{item.profissao}</Text>
      <Text style={styles.text}>Salário: R$ {item.salario}</Text>
      <Text style={styles.text}>Setor: {item.setor}</Text>
      <Text style={styles.text}>Cidade: {item.cidade} - {item.estado}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => navigation.navigate('Profissionais', { profissionalId: item.matricula })}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => excluir(item.matricula)}
        >
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.newButton}
        onPress={() => navigation.navigate('Profissionais')}
      >
        <Ionicons name="add-circle-outline" size={24} color={colors.white} />
        <Text style={styles.newButtonText}>Novo Profissional</Text>
      </TouchableOpacity>

      <FlatList
        data={profissionais}
        keyExtractor={(item) => item.matricula.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={<Text style={styles.text}>Nenhum profissional encontrado.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
    flex: 1,
  },
  newButton: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  newButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: fonts.bold,
    marginLeft: 10,
  },
  card: {
    backgroundColor: colors.cardBackground,
    padding: 20,
    marginTop: 15,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.primary,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  nome: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: fonts.bold,
    color: colors.primary,
  },
  profissao: {
    fontSize: 18,
    color: colors.textDark,
    marginBottom: 6,
    fontFamily: fonts.regular,
  },
  text: {
    fontSize: 16,
    color: colors.textLight,
    marginBottom: 4,
    fontFamily: fonts.regular,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  editButton: {
    backgroundColor: colors.primaryLight,
  },
  deleteButton: {
    backgroundColor: colors.error,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
    fontFamily: fonts.bold,
    fontSize: 16,
  },
});
