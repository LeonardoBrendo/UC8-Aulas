import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const CustomButton = ({ title, onPress, backgroundColor = '#1E90FF', textColor = '#fff' }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};


export default CustomButton;
