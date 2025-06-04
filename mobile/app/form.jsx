import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // ícone de seta
import api from '../api/api';

export default function ProfissionalForm() {
  const { profissional } = useLocalSearchParams();
  const router = useRouter();
  const prof = profissional ? JSON.parse(profissional) : null;

  const [nome, setNome] = useState(prof?.nome || '');
  const [profissao, setProfissao] = useState(prof?.profissao || '');
  const [salario, setSalario] = useState(prof?.salario?.toString() || '');
  const [setor, setSetor] = useState(prof?.setor || '');
  const [cidade, setCidade] = useState(prof?.cidade || '');
  const [estado, setEstado] = useState(prof?.estado || '');

  const salvar = async () => {
    try {
      const dados = { nome, profissao, salario: parseFloat(salario), setor, cidade, estado };
      if (prof) {
        await api.put(`/profissionais/${prof.matricula}`, dados);
      } else {
        await api.post('/profissionais', dados);
      }
      router.back();
    } catch (error) {
      console.error('Erro ao salvar profissional:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <TouchableOpacity onPress={() => router.back()} style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={{ marginLeft: 5, fontSize: 16 }}>Voltar</Text>
      </TouchableOpacity>

      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={inputStyle} />
      <TextInput placeholder="Profissão" value={profissao} onChangeText={setProfissao} style={inputStyle} />
      <TextInput placeholder="Salário" value={salario} onChangeText={setSalario} keyboardType="numeric" style={inputStyle} />
      <TextInput placeholder="Setor" value={setor} onChangeText={setSetor} style={inputStyle} />
      <TextInput placeholder="Cidade" value={cidade} onChangeText={setCidade} style={inputStyle} />
      <TextInput placeholder="Estado (UF)" value={estado} onChangeText={setEstado} maxLength={2} style={inputStyle} />
      <Button title="Salvar" onPress={salvar} />
    </ScrollView>
  );
}

const inputStyle = {
  borderBottomWidth: 1,
  marginBottom: 10,
  padding: 8,
};
