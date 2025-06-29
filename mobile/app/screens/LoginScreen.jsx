import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../api/api'; // axios configurado
import { colors, fonts } from '../constants/theme';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = async () => {
    try {
      if (!email || !senha) {
        alert('Informe email e senha.');
        return;
      }
      // Validação mockada:
      if (email === 'leo@gmail.com' && senha === '123') {
        navigation.navigate('Listagem');
      } else {
        alert('Email ou senha incorretos.');
      }
    } catch (error) {
      alert('Erro ao logar. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor={colors.textLight}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
        placeholderTextColor={colors.textLight}
      />
      
      <Button title="Entrar" color={colors.primary} onPress={login} />
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.link}>
        <Text style={styles.linkText}>Não 1 tem conta? Cadastre-se</Text>
      </TouchableOpacity>
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
  link: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: colors.primary,
    fontWeight: '600',
  },
});
