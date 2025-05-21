import { Picker } from '@react-native-picker/picker'; // ✅ import correto
import { useState } from 'react';
import { Alert, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';


const Form = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [profissao, setProfissao] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [sexoMasculino, setSexoMasculino] = useState(true);
  const [sobre, setSobre] = useState('');

  const handleSubmit = () => {
    if (!nome || !email || !senha || !profissao || !idade || !cidade || !estado || !sobre) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const sexo = sexoMasculino ? 'Masculino' : 'Feminino';

    Alert.alert('Dados enviados', 
      `Nome: ${nome}\nEmail: ${email}\nSenha: ${senha}\nProfissão: ${profissao}\nIdade: ${idade}\nCidade: ${cidade}\nEstado: ${estado}\nSexo: ${sexo}\nSobre: ${sobre}`
    );

    // Limpar campos
    setNome('');
    setEmail('');
    setSenha('');
    setProfissao('');
    setIdade('');
    setCidade('');
    setEstado('');
    setSexoMasculino(true);
    setSobre('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Text style={styles.label}>Profissão</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua profissão"
        value={profissao}
        onChangeText={setProfissao}
      />

      <Text style={styles.label}>Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <Text style={styles.label}>Cidade</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua cidade"
        value={cidade}
        onChangeText={setCidade}
      />

      <Text style={styles.label}>Estado</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={estado}
          onValueChange={(itemValue) => setEstado(itemValue)}
        >
          <Picker.Item label="Selecione um estado" value="" />
          <Picker.Item label="SP" value="SP" />
          <Picker.Item label="RJ" value="RJ" />
          <Picker.Item label="MG" value="MG" />
          <Picker.Item label="BA" value="BA" />
          <Picker.Item label="RS" value="RS" />
          {/* adicione mais estados conforme desejar */}
        </Picker>
      </View>

      <Text style={styles.label}>Sexo</Text>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Masculino</Text>
        <Switch
          value={sexoMasculino}
          onValueChange={setSexoMasculino}
        />
        <Text style={styles.toggleLabel}>Feminino</Text>
      </View>

      <Text style={styles.label}>Sobre você</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Fale um pouco sobre você"
        multiline
        numberOfLines={4}
        value={sobre}
        onChangeText={setSobre}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
