import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet } from 'react-native'
import ActorCard from './ActorCard'
const Cast = ({ list }) => (
  <FlatList
    horizontal
    style={styles.wrapper}
    keyExtractor={item => item.name}
    data={list}
    renderItem={({ item }) => (
      <ActorCard {...item} />
    )}
  />
)

Cast.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }))
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10
  }
})

export default Cast