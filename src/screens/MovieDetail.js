import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { MovieBanner, Cast, MovieInfoRow } from '../components';
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
  return (
    <ScrollView>
      <MovieBanner image={image} />
      <View style={styles.informationWrapper}>
        <View>
          <Text>{name}</Text>
          <Text>Hello</Text>
          <Text>{id}</Text>
        </View>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Text>
        <Cast list={actors} />
        <MovieInfoRow title="Studio" value="warner bros" />
        <MovieInfoRow title="genre" value="action, adventure, Fantasy" />
        <MovieInfoRow title="release" value="2018" />
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
