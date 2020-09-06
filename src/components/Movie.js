import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'

const Movie = ({ id, name, image, score }) => {
  const { colors } = useTheme()
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('MovieDetail', { id, name, image })}>
      <View style={styles.card}>
        <Image
          source={{ uri: image }}
          style={styles.image}></Image>
        <Text
          numberOfLines={1}
          style={[styles.name], { color: colors.text }}>
          {name}
        </Text>
        <Text>{score}/5</Text>
      </View>
    </TouchableOpacity>
  )
}

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
