import React from 'react';
import { Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Cabeçalho do App</Text>
    </View>
  );
}
