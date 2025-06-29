import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, fonts } from '../constants/theme';

export default function ErrorScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Ocorreu um erro. Tente novamente.</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} color={colors.error} />
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
    color: colors.error,
    fontFamily: fonts.bold,
  },
});
