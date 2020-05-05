import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import DroneContext from '../context/DroneContext'

const IndexScreen = _ => {
    const value = useContext(DroneContext)
    return (
        <View>
            <Text>Index Screen</Text>
            <Text>{value.name}</Text>
        </View>
    )
}

export default IndexScreen
