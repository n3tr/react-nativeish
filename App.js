import React from 'react'
import RootNavigation from './src/navigation'
import {View, StyleSheet} from 'react-native'
import Expo from 'expo'
// import StorybookUI from './storybook'
// module.exports = __DEV__ ? StorybookUI : App
const styles = StyleSheet.create({
  rootView: {
    paddingTop: Expo.Constants.statusBarHeight,
    flex: 1
  }
})
module.exports = () => (
  <View style={styles.rootView}>
    <RootNavigation />
  </View>
)
