// app/sobre.js
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Sobre() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.text}>Este app foi criado usando React Native com Expo Router.</Text>

      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#ede7f6',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#512da8',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#311b92',
    marginBottom: 24,
    textAlign: 'center',
  },
});
