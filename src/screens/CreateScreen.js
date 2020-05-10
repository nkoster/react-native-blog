import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { Context } from '../context/DroneContext'

const CreateScreen = ({navigation}) => {
    const { state } = useContext(Context)
    return (
        <View>
            <Text>Create Screen</Text>
        </View>
    )
}

export default CreateScreen
