import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { MoviesList, SearchHeader } from '../components';
import { useTheme } from '@react-navigation/native';

const HomeScreen = () => {
  const sections = [
    { name: 'top rated', path: 'top_rated' },
    { name: 'upcoming', path: 'upcoming' },
    { name: 'popular', path: 'popular' },
  ];
  const { colors } = useTheme();
  const List = () => (
    <FlatList
      style={[
        styles.filmsList,
        { backgroundColor: colors.moviesListBackground },
      ]}
      keyExtractor={(item) => item.path}
      data={sections}
      renderItem={({ item }) => (
        <MoviesList section={item.name} path={item.path} />
      )}
    />
  );

  return (
    <View style={styles.screen}>
      <SearchHeader />
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#5A79E8',
  },
  filmsList: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 30,
  },
});

export default HomeScreen;
