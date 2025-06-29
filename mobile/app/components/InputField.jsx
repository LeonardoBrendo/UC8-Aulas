import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors, fonts } from '../constants/theme';

export default function InputField({ placeholder, value, onChangeText, keyboardType = 'default', maxLength }) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.textLight}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      maxLength={maxLength}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    fontSize: 18,
    paddingVertical: 10,
    marginBottom: 25,
    color: colors.textDark,
    fontFamily: fonts.regular,
  },
});
