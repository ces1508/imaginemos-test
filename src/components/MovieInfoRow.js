import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
const MovieInfoRow = ({ title, value }) => {
  const { colors } = useTheme();
  const colorStyle = { color: colors.text };
  return (
    <View style={styles.container}>
      <Text style={[styles.title, colorStyle]}>{title}</Text>
      <Text style={colorStyle}>{value}</Text>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default MovieInfoRow;
