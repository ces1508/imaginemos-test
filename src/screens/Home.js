import React from 'react'
import {
  View,
  FlatList,
  StyleSheet
} from 'react-native'

import {
  MoviesList,
  SearchHeader
} from '../components'

const films = [
  {
    section: 'Recomended For You',
    films: [
      {
        id: 1,
        name: 'Avengers:endGame',
        image: 'https://cdn.vox-cdn.com/thumbor/iqbKqSTMnIh5kMdWAw0M0qIAORM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15969338/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.jpg',
        score: 4
      },
      {
        id: 2,
        name: "Aquaman",
        image: 'https://images-na.ssl-images-amazon.com/images/I/71JGOXv98RL._AC_SL1304_.jpg',
        score: 4
      },
      {
        id: 3,
        name: 'SpiderMan HomeComming',
        image: 'https://www.joblo.com/assets/images/joblo/posters/2019/08/1vso0vrm42j31.jpg',
        score: 3
      }
    ]
  },
  {
    section: 'top rated',
    films: [
      {
        id: 10,
        name: 'bumblebee',
        image: 'https://i.pinimg.com/originals/36/8b/6b/368b6b69788d709f6cf0c7c77de7af22.jpg',
        score: 4
      },
      {
        id: 11,
        name: "La la land",
        image: 'https://noescinetodoloquereluce.com/wp-content/uploads/2016/12/la_la_land_ver8_xlg.jpg',
        score: 4
      },
      {
        id: 12,
        name: 'Kursk',
        image: 'https://es.web.img3.acsta.net/r_1280_720/pictures/18/09/20/10/20/0444908.jpg',
        score: 5
      },
      {
        id: 20,
        name: 'Avengers:endGame',
        image: 'https://cdn.vox-cdn.com/thumbor/iqbKqSTMnIh5kMdWAw0M0qIAORM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15969338/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.jpg',
        score: 4
      },
      {
        id: 22,
        name: "Aquaman",
        image: 'https://images-na.ssl-images-amazon.com/images/I/71JGOXv98RL._AC_SL1304_.jpg',
        score: 4
      },
      {
        id: 23,
        name: 'SpiderMan HomeComming',
        image: 'https://www.joblo.com/assets/images/joblo/posters/2019/08/1vso0vrm42j31.jpg',
        score: 3
      }
    ]
  }
]

const HomeScreen = () => {

  const List = () => (
    <FlatList
      style={styles.filmsList}
      keyExtractor={(item) => item.section}
      data={films}
      renderItem={({ item }) => (
        <MoviesList
          section={item.section}
          data={item.films}
        />
      )}
    />
  )

  return (
    <View>
      <SearchHeader />
      <List />
    </View>
  )
}

const styles = StyleSheet.create({
  filmsList: {
    borderRadius: 20,
    backgroundColor: 'red',
    padding: 20
  }
})

export default HomeScreen
