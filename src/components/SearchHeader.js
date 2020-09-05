import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

const SearchHeader = () => {
  const [value, onChangeText] = useState('')
  return (
    <View style={styles.header}>
      <Text>Hello, what do you wan want to watch ?</Text>
      <TextInput
        value={value}
        onChangeText={text => onChangeText(text)}
        placeholder='Search'
        blurOnSubmit
        onSubmitEditing={() => alert(`searching ${value}`)}
        style={styles.input}/>
    </View>
  )
}

const styles = new StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: 'blue',
    height: 200
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    width: '100%',
    borderRadius: 20,
    height: 35,
    paddingHorizontal: 10
  },
})

export default SearchHeader
