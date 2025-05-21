import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const SectionTitle = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default SectionTitle;
