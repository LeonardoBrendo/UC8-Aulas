import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../api/api';
import { colors, fonts } from '../constants/theme';
import BackButton from '../components/BackButton';

export default function ProfissionalScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const profissional = route.params?.profissional || null; // JSON string

  const prof = profissional ? JSON.parse(profissional) : null;

  const [nome, setNome] = useState(prof?.nome || '');
  const [profissao, setProfissao] = useState(prof?.profissao || '');
  const [salario, setSalario] = useState(prof?.salario?.toString() || '');
  const [setor, setSetor] = useState(prof?.setor || '');
  const [cidade, setCidade] = useState(prof?.cidade || '');
  const [estado, setEstado] = useState(prof?.estado || '');
  const [loading, setLoading] = useState(false);

  const salvar = async () => {
    if (!nome || !profissao) {
      Alert.alert('Erro', 'Nome e profissão são obrigatórios.');
      return;
    }

    const dados = {
      nome,
      profissao,
      salario: parseFloat(salario),
      setor,
      cidade,
      estado,
    };

    setLoading(true);
    try {
      if (prof?.matricula) {
        await api.put(`/profissionais/${prof.matricula}`, dados);
      } else {
        await api.post('/profissionais', dados);
      }
      navigation.replace('Listagem');
    } catch (error) {
      console.error('Erro ao salvar profissional:', error);
      Alert.alert('Erro', 'Erro ao salvar profissional.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loading]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        placeholderTextColor={colors.textLight}
      />
      <TextInput
        placeholder="Profissão"
        value={profissao}
        onChangeText={setProfissao}
        style={styles.input}
        placeholderTextColor={colors.textLight}
      />
      <TextInput
        placeholder="Salário"
        value={salario}
        onChangeText={setSalario}
        keyboardType="numeric"
        style={styles.input}
        placeholderTextColor={colors.textLight}
      />
      <TextInput
        placeholder="Setor"
        value={setor}
        onChangeText={setSetor}
        style={styles.input}
        placeholderTextColor={colors.textLight}
      />
      <TextInput
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
        style={styles.input}
        placeholderTextColor={colors.textLight}
      />
      <TextInput
        placeholder="Estado (UF)"
        value={estado}
        onChangeText={setEstado}
        maxLength={2}
        style={styles.input}
        placeholderTextColor={colors.textLight}
      />

      <Button title="Salvar" color={colors.primary} onPress={salvar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
    flexGrow: 1,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    fontSize: 18,
    marginBottom: 20,
    paddingVertical: 8,
    color: colors.textDark,
    fontFamily: fonts.regular,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
