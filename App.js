import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
import { Provider as DroneProvider } from './src/context/DroneContext'

const navigator = createStackNavigator({
  IndexScreen
}, {
  initialRouteName: 'IndexScreen',
  defaultNavigationOptions: {
    title: 'DroneExistence'
  }
})

const App = createAppContainer(navigator)

export default _ => {
  return (
    <DroneProvider>
      <App />
    </DroneProvider>
  )
}
