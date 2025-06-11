import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../api/api';
import { colors, fonts } from '../constants/theme';
import BackButton from '../components/BackButton';

export default function ProfissionaisScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const profissionalId = route.params?.profissionalId || null;

  const [nome, setNome] = useState('');
  const [profissao, setProfissao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const carregarProfissional = async () => {
    if (!profissionalId) return;
    setLoading(true);
    try {
      const response = await api.get(`/profissionais/${profissionalId}`);
      const { nome, profissao, telefone, email } = response.data;
      setNome(nome);
      setProfissao(profissao);
      setTelefone(telefone);
      setEmail(email);
    } catch (error) {
      alert('Erro ao carregar profissional.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarProfissional();
  }, [profissionalId]);

  const salvarProfissional = async () => {
    if (!nome || !profissao) {
      alert('Nome e profissão são obrigatórios.');
      return;
    }
    setLoading(true);
    try {
      if (profissionalId) {
        await api.put(`/profissionais/${profissionalId}`, { nome, profissao, telefone, email });
      } else {
        await api.post('/profissionais', { nome, profissao, telefone, email });
      }
      navigation.replace('Listagem');
    } catch (error) {
      alert('Erro ao salvar profissional.');
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
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
        style={styles.input}
        placeholderTextColor={colors.textLight}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
        placeholderTextColor={colors.textLight}
      />
      <Button title="Salvar" color={colors.primary} onPress={salvarProfissional} />
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
