import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

const Movie = ({ id, name, image, score }) => (
  <View style={styles.card}>
    <Image
      source={{ uri: image }}
      style={styles.image}></Image>
    <Text
      numberOfLines={1}
      style={styles.name}>
      {name}
    </Text>
    <Text>{score}/5</Text>
  </View>
)

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired
}

export default Movie



const styles = new StyleSheet.create({
  card: {
    borderRadius: 10,
    width: 110,
    marginRight: 10
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    backgroundColor: 'gray'
  },
  name: {
    fontSize: 15
  }
})
