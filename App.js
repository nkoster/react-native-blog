import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'

const navigator = createStackNavigator({
  IndexScreen
}, {
  initialRouteName: 'IndexScreen',
  defaultNavigationOptions: {
    title: 'DroneExistence'
  }
})

export default createAppContainer(navigator)
