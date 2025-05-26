import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import { useRouter } from 'expo-router';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import Inicio from './components/Inicio/Inicio';

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
      <Header />
      <Navbar />
      <Inicio />
      <Form />
      <Button title="Ir para Sobre" onPress={() => router.push('/sobre')} />
    </ScrollView>
  );
}
