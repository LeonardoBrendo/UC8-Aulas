import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, fonts } from '../constants/theme';

export default function SuccessScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Operação realizada com sucesso!</Text>
      <Button title="Voltar para listagem" onPress={() => navigation.navigate('Listagem')} color={colors.success} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: '700',
    color: colors.success,
    fontFamily: fonts.bold,
  },
});
