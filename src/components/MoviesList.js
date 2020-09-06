import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'
import Movie from './Movie'
import { useTheme } from '@react-navigation/native'
const MoviestList = ({ data, section }) => {
  const { colors } = useTheme()
  return (
    <View style={styles.wrapper}>
      <Text
        numberOfLines={1}
        style={[styles.sectionName, { color: colors.text }]}>
        {section}
      </Text>
      <FlatList
        keyExtractor={(item) => item.id}
        horizontal={true}
        data={data}
        renderItem={({ item }) => <Movie {...item} />}
      />
    </View>
  )
  }

MoviestList.propTypes = {
  section: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }))
}

const styles = new StyleSheet.create({
  wrapper: {
    paddingVertical: 15
  },
  sectionName: {
    fontSize: 17,
    marginBottom: 10,
    textTransform: 'capitalize'
  }
})

export default MoviestList
