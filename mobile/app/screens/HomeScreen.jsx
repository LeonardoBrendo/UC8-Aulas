import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, fonts } from './theme'; // ajuste conforme sua estrutura

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/senac.jpg')} // ajuste o caminho se necessário
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Bem-vindo à tela Home Leo!</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Ir para Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { marginTop: 16 }]} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.buttonText}>Cadastrar Usuário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontFamily: fonts.bold,
    color: colors.primary,
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 14,
    elevation: 4,
    shadowColor: colors.primary,
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.bold,
  },
});
