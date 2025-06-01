// app/Senac.js
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Senac() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulário do Senac</Text>
      <Text style={styles.text}>Essa é a tela do formulário.</Text>

      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff3e0',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#e65100',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#bf360c',
    marginBottom: 24,
    textAlign: 'center',
  },
});
