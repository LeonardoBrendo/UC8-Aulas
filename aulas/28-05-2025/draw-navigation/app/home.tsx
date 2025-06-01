import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState as useReactState } from 'react';

export default function HomeScreen() {
  const [nome, setNome] = useReactState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite seu nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={nome}
        onChangeText={setNome}
      />
      {nome !== '' && <Text style={styles.text}>Olá, {nome}!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
  },
  label: {
    fontSize: 18, marginBottom: 10,
  },
  input: {
    width: '100%', borderWidth: 1, borderColor: '#ccc', borderRadius: 5,
    padding: 10, marginBottom: 15,
  },
  text: {
    fontSize: 20,
  },
});
