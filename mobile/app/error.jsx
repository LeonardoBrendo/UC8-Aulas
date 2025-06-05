// error.jsx (exemplo)
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { colors, fonts } from './styles/theme';

export default function ErrorScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>❌ Erro ao salvar profissional!</Text>
      <Text style={styles.subText}>Você será redirecionado em breve...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 30,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.error,
    backgroundColor: '#fee2e2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.error,
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 7,
  },
  errorText: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: fonts.bold,
    color: colors.error,
    marginBottom: 12,
  },
  subText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: '#b91c1c',
  },
});
