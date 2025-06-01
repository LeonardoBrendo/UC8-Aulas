import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Perfil() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Perfil do Usuário</Text>
      <Button title="Editar perfil" onPress={() => router.push('/perfil/editarPerfil')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
