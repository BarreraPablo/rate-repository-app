/* eslint-disable react/prop-types */
import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4
  }
})

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <Image source={{ uri: props.ownerAvatarUrl }} style={styles.image} />
      <StyledText fontSize='subheading' fontWeight='bold'>{props.fullname}</StyledText>
      <StyledText>{props.description}</StyledText>
      <StyledText style={styles.language}>{props.language}</StyledText>
      <RepositoryStats {...props} />
    </View>
  )
}

export default RepositoryItem
