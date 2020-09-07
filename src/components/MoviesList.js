/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Movie from './Movie';
import {useTheme} from '@react-navigation/native';
import { useThemoviedb } from '../hooks/useFetch'
const MoviestList = ({ section, path }) => {
  const [movies, setMovies] = useState([])
  const { data, loading } = useThemoviedb(
    'GET',
    `/movie/${path}?api_key=383aa7b32e999f489cc02ec4cdfa3c24&language=en-US&page=1`
  );
  useEffect(() => {
    if (!loading && data.results) {
      const parseMovies = data.results.map((film) => ({
        name: film.title,
        id: film.id,
        score: film.vote_average / 2,
        image: `https://image.tmdb.org/t/p/w220_and_h330_face${film.poster_path}`,
      }));
      setMovies(parseMovies);
     }
  }, [data, loading]);
  const {colors} = useTheme();
  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <Text
          numberOfLines={1}
          style={[styles.sectionName, {color: colors.text}]}>
          {section}
        </Text>
        <Text style={styles.text}>see all</Text>
      </View>
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        data={movies}
        renderItem={({item}) => <Movie {...item} />}
      />
    </View>
  );
};

MoviestList.propTypes = {
  section: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

const styles = new StyleSheet.create({
  wrapper: {
    paddingVertical: 15,
  },
  sectionName: {
    fontSize: 17,
    marginBottom: 10,
    textTransform: 'capitalize',
  },
  list: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#707884',
    fontSize: 14,
  }
});

export default MoviestList;
