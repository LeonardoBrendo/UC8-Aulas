//app/form.jsx
import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import api from '../app/api/api';
import { colors, fonts } from './styles/theme';

export default function ProfissionalForm() {
  const { profissional } = useLocalSearchParams();
  const router = useRouter();
  const prof = profissional ? JSON.parse(profissional) : null;

  const [nome, setNome] = useState(prof?.nome || '');
  const [profissao, setProfissao] = useState(prof?.profissao || '');
  const [salario, setSalario] = useState(prof?.salario?.toString() || '');
  const [setor, setSetor] = useState(prof?.setor || '');
  const [cidade, setCidade] = useState(prof?.cidade || '');
  const [estado, setEstado] = useState(prof?.estado || '');

  const salvar = async () => {
    try {
      const dados = {
        nome,
        profissao,
        salario: parseFloat(salario),
        setor,
        cidade,
        estado
      };

      if (prof) {
        await api.put(`/profissionais/${prof.matricula}`, dados);
      } else {
        await api.post('/profissionais', dados);
      }
      router.replace('/success');
    } catch (error) {
      console.error('Erro ao salvar profissional:', error);
      router.replace('/error');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color={colors.primary} />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

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

      <View style={styles.buttonWrapper}>
        <Button title="Salvar" color={colors.primaryLight} onPress={salvar} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 25,
    margin: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.primary,
    shadowOpacity: 0.15,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  backText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: fonts.bold,
    color: colors.primary,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    fontSize: 18,
    paddingVertical: 10,
    marginBottom: 25,
    color: colors.textDark,
    fontFamily: fonts.regular,
  },
  buttonWrapper: {
    marginTop: 10,
  },
});
