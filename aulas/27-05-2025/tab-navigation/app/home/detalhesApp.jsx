import { View, Text, StyleSheet } from 'react-native';

export default function DetalhesApp() {
  return (
    <View style={styles.container}>
      <Text>Informações sobre o app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
