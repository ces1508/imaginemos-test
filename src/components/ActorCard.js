import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'
import { useTheme } from '@react-navigation/native'
const ActorCard = ({ name, picture }) => {
  const { colors } = useTheme()
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: picture }}
        style={styles.picture} />
      <Text
        style={[styles.text, { color: colors.text }]}
        numberOfLines={2} >
        {name}
      </Text>
    </View>
  )
}

const styles = new StyleSheet.create({
  card: {
    width: 60,
    marginRight: 10
  },
  text: {
    textAlign: 'center'
  },
  picture: {
    width: 60,
    height: 60,
    borderRadius: 30
  }
})

ActorCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
}

export default ActorCard