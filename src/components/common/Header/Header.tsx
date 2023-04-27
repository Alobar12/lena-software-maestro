import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import { backButton } from '@assets'

import theme from '../../../theme/theme'

const Header = (props: IHeader) => {

  const { onPress, title } = props

  const { container, backButtonStyles, titleStyle } = styles

  return (
    <View style={container}>
      <TouchableOpacity onPress={onPress} style={backButtonStyles}>
        <Image source={backButton} />
      </TouchableOpacity>
      <Text style={titleStyle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing.xs
  },
  titleStyle: {
    fontSize: theme.fontSizes.l,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.darkBlue,
  },
  backButtonStyles: {
    position: "absolute",
    left: 20
  },
})