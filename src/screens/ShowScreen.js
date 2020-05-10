import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { Context } from '../context/DroneContext'

const ShowScreen = ({navigation}) => {
    const { state } = useContext(Context)
    const dronePost = state.find(data => data.id === navigation.getParam('id'))
    return (
        <View>
            <Text>Show Screen - {dronePost.title}</Text>
        </View>
    )
}

export default ShowScreen
