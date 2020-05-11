import React from 'react'
import { Text, View } from 'react-native'

const EditScreen = ({navigation}) => {
    const dronePost = navigation.getParam('id')
    return (
        <View>
            <Text>Edit Screen {dronePost}</Text>
        </View>
    )
}

export default EditScreen
