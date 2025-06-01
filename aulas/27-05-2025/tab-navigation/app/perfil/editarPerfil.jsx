import { View, Text, StyleSheet } from 'react-native';

export default function EditarPerfil() {
  return (
    <View style={styles.container}>
      <Text>Editar informações do usuário</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
