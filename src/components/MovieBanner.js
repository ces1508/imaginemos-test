import React from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet } from 'react-native'

const MovieBanner = ({ image }) => (
  <Image
    source={{ uri: image }}
    resizeMethod='resize'
    resizeMode='cover'
    style={styles.banner}
  />
)

MovieBanner.propTypes = {
  image: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 300
  },
})

export default MovieBanner