/* eslint-disable no-alert */
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
const SearchHeader = () => {
  const [value, onChangeText] = useState('');
  const { colors } = useTheme();
  return (
    <View style={[styles.header, { backgroundColor: colors.homeBackground }]}>
      <Text style={styles.title}>Hello, what do you wan want to watch ?</Text>
      <TextInput
        value={value}
        onChangeText={(text) => onChangeText(text)}
        placeholder="Search"
        blurOnSubmit
        onSubmitEditing={() => alert(`searching ${value}`)}
        style={styles.input}
      />
    </View>
  );
};

const styles = new StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'blue',
    height: 200,
  },
  title: {
    fontSize: 25,
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, .5)',
    width: '100%',
    borderRadius: 20,
    height: 35,
    paddingHorizontal: 10,
  },
});

export default SearchHeader;
