import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Navbar = ({ labels, onInicioPress, onFormularioPress, onSobrePress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onInicioPress}>
        <Text style={styles.text}>{labels.inicio}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onFormularioPress}>
        <Text style={styles.text}>{labels.formulario}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onSobrePress}>
        <Text style={styles.text}>{labels.sobre}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
