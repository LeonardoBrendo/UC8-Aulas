import React from 'react';
import { View, Text } from 'react-native';

export default function Navbar() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
      <Text>Início</Text>
      <Text>Sobre</Text>
      <Text>Contato</Text>
    </View>
  );
}
