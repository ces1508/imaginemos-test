import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { MovieBanner, Cast, MovieInfoRow } from '../components';
import { useThemoviedb } from '../hooks/useFetch'
const actors = [
  {
    name: 'Jason Momoa',
    picture:
      'https://cdnvos.lavoz.com.ar/sites/default/files/styles/box_128/public/nota_periodistica/1280_jason_momoa_0_1566936192.jpg',
  },
  {
    name: 'Amber Heard',
    picture: 'https://www.stylist.co.uk/images/app/uploads/2017/12/11074817/amber-heard-responds-jk-rowling-2-crop-1545292728-1276x1276.jpg?w=256&h=256&fit=max&auto=format%2Ccompress',
  },
  {
    name: 'patric wilson',
    picture: 'https://res.cloudinary.com/enjoymovie/image/upload/w_256,h_256,c_fill,g_auto:faces/hsw0aqlge0yes6fbvy2m.jpg',
  },
  {
    name: 'nicole kidman',
    picture: 'https://www.elidealgallego.com/media/idealgallego/images/2017/06/21/2017062100483999947.jpg',
  },
];

const MovieDetailScreen = ({ route }) => {
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
        genres: data.genres.map((genre) => genre.name).join(''),
        studios: data.production_companies.map((pc) => pc.name).join(''),
        release: data.release_date,
      });
    }
  }, [data, loading, error]);

  return (
    <ScrollView>
      <MovieBanner image={image} />
      <View style={styles.informationWrapper}>
        <View>
          <Text>{name}</Text>
          <Text>Hello</Text>
          <Text>{id}</Text>
        </View>
        {Object.keys(details).length > 0 ? (
          <>
            <Text style={styles.description}>{details.description}</Text>
            <Cast list={actors} />
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
});

export default MovieDetailScreen;
