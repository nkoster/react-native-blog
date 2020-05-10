import React from 'react'
import { Text, View } from 'react-native'

const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    return (
        <View>
            <Text>Show Screen {id}</Text>
        </View>
    )
}

export default ShowScreen
