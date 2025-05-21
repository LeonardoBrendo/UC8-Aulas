import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Formulário</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Sobre</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
