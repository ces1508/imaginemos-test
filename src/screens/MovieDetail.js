import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MovieBanner, Cast, MovieInfoRow, Rating } from '../components';
import { useThemoviedb } from '../hooks/useFetch';
import { useTheme } from '@react-navigation/native';

const MovieDetailScreen = ({ route, navigation }) => {
  const { id, name, image, score } = route.params;
  const [details, setDetails] = useState({});
  const { colors } = useTheme();
  const { data, loading, error } = useThemoviedb(
    'GET',
    `/movie/${id}?api_key=383aa7b32e999f489cc02ec4cdfa3c24&language=en-US`
  );

  useEffect(() => {
    if (!loading && !error) {
      setDetails({
        description: data.overview,
        genres: data.genres.map((genre) => genre.name).join(),
        studios: data.production_companies.map((pc) => pc.name).join(),
        release: data.release_date,
      });
    }
  }, [data, loading, error]);

  return (
    <ScrollView>
      <MovieBanner image={image} />
      <View style={styles.navigationBar}>
        <Icon
          name="arrow-left"
          size={20}
          style={styles.icon}
          onPress={() => navigation.goBack()}
        />
        <Icon name="heart-outline" size={20} style={styles.icon} />
      </View>
      <View style={styles.informationWrapper}>
        <Text style={{ ...styles.title, color: colors.text }}>{name}</Text>
        <View style={styles.row}>
          <Text style={styles.watchButton}>watch now</Text>
          <Rating score={score} />
        </View>
        {Object.keys(details).length > 0 ? (
          <>
            <Text style={styles.description}>{details.description}</Text>
            <Cast list={[]} />
            <MovieInfoRow title="Studios" value={details.studios} />
            <MovieInfoRow title="genres" value={details.genres} />
            <MovieInfoRow
              title="release"
              value={details.release.split('-')[0]}
            />
          </>
        ) : (
          <Text>loading</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = new StyleSheet.create({
  informationWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  description: {
    color: 'gray',
    lineHeight: 25,
    fontSize: 16,
  },
  navigationBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  watchButton: {
    backgroundColor: '#6B7380',
    color: '#fff',
    textTransform: 'uppercase',
    borderRadius: 20,
    padding: 10,
    width: 120,
    fontSize: 12,
    textAlign: 'center',
  },
  icon: {
    height: 60,
    textAlignVertical: 'center',
    width: 80,
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MovieDetailScreen;
