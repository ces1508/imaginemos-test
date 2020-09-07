import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MovieBanner, Cast, MovieInfoRow } from '../components';
import { useThemoviedb } from '../hooks/useFetch';

const MovieDetailScreen = ({ route, navigation }) => {
  const { id, name, image } = route.params;
  const [details, setDetails] = useState({});
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
        <View>
          <Text>{name}</Text>
          <Text>Hello</Text>
          <Text>{id}</Text>
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
  },
  description: {
    color: 'gray',
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
  icon: {
    height: 60,
    textAlignVertical: 'center',
    width: 80,
    textAlign: 'center',
    color: '#fff',
  },
});

export default MovieDetailScreen;
