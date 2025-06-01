import { View, Text, Switch, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const [modoEscuro, setModoEscuro] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: modoEscuro ? '#333' : '#fff' }]}>
      <Text style={[styles.text, { color: modoEscuro ? '#fff' : '#000' }]}>
        Modo {modoEscuro ? 'Escuro' : 'Claro'}
      </Text>
      <Switch value={modoEscuro} onValueChange={setModoEscuro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
