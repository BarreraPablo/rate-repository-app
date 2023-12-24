import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'

export default function App () {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => Alert.alert('hola')}>
        <Text>Test!</Text>
      </Pressable>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
