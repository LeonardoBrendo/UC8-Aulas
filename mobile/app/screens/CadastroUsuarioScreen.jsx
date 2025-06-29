import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../api/api';
import { colors, fonts } from '../constants/theme';

export default function CadastroUsuarioScreen() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('comum'); // valor padrão
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const cadastrar = async () => {
    try {
      if (!nome || !email || !senha || !tipo || !cidade || !estado) {
        alert('Preencha todos os campos');
        return;
      }

      await api.post('/usuarios', {
        nome,
        email,
        senha,
        tipo,
        cidade,
        estado,
      });

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
      <Picker
        selectedValue={tipo}
        style={styles.picker}
        onValueChange={(itemValue) => setTipo(itemValue)}
      >
        <Picker.Item label="Comum" value="comum" />
        <Picker.Item label="Analista" value="analista" />
        <Picker.Item label="Admin" value="admin" />
      </Picker>
      <TextInput
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
        style={styles.input}
        placeholderTextColor={colors.textLight}
      />
      <TextInput
        placeholder="Estado"
        value={estado}
        onChangeText={setEstado}
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
  picker: {
    height: 50,
    marginBottom: 20,
    color: colors.textDark,
  },
});
