import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../api/api';
import { colors, fonts } from '../constants/theme';

export default function CadastroScreen() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastrar = async () => {
    try {
      if (!nome || !email || !senha) {
        alert('Preencha todos os campos');
        return;
      }
      // Substitua com sua API real para cadastro
      await api.post('/usuarios', { nome, email, senha });

      navigation.replace('Login');
    } catch (error) {
      alert('Erro ao cadastrar usuário.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
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
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
        placeholderTextColor={colors.textLight}
      />
      <Button title="Cadastrar" color={colors.primary} onPress={cadastrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    marginBottom: 20,
    fontSize: 18,
    paddingVertical: 8,
    color: colors.textDark,
    fontFamily: fonts.regular,
  },
});
