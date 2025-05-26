import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Inicio() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Text style={styles.text}>Bem-vindo ao app!</Text>

      <View style={styles.buttons}>
        <Button
          title="Ir para o Formulário"
          onPress={() => router.push('/formulario')}
        />
        <Button
          title="Ir para a página Sobre"
          onPress={() => router.push('/sobre')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#00796b',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#004d40',
    marginBottom: 24,
    textAlign: 'center',
  },
  buttons: {
    gap: 12,
  },
});
