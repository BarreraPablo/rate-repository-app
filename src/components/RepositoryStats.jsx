import React from 'react'
import { View } from 'react-native'
import StyledText from './StyledText'

const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText align='center'>{props.stars}</StyledText>
        <StyledText align='center' fontWeight='bold'>Stars:</StyledText>
      </View>
      <View>
        <StyledText align='center'>{props.forks}</StyledText>
        <StyledText align='center' fontWeight='bold'>Forks:</StyledText>
      </View>
      <View>
        <StyledText align='center'>{props.review}</StyledText>
        <StyledText align='center' fontWeight='bold'>Review:</StyledText>
      </View>
      <View>
        <StyledText align='center'>{props.rating}</StyledText>
        <StyledText align='center' fontWeight='bold'>Rating:</StyledText>
      </View>
    </View>
  )
}

export default RepositoryStats
