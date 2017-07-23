import React from 'react'
import {Button} from 'react-native'
import {props} from 'react-navigation'

export default class HomeScreen extends React.Component {
  props: {
    navigation: props.navigation
  }
  render () {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title='Go to notifications'
      />
    )
  }
}
HomeScreen.navigationOptions = {
  tabBarLabel: 'Home',
  // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  tabBarIcon: ({ tintColor }: props.tabBarIcon) => (
    <i name='ios-home' />
  )
}
