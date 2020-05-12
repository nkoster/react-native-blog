import React, { useState, useContext } from 'react'
import { Text, View, TextInput } from 'react-native'
import { Context } from '../context/DroneContext'

const EditScreen = ({navigation}) => {
    const { state } = useContext(Context)
    const dronePost = state.find(p => p.id === navigation.getParam('id'))
    const [ title, setTitle ] = useState(dronePost.title)
    const [ content, setContent] = useState(dronePost.content)
    return (
        <View>
            <Text>Edit Title ({title})</Text>
            <TextInput
                value={title}
                onChangeText={setTitle}
            />
            <Text>Edit Content</Text>
            <TextInput
                value={content}
                onChangeText={setContent}
            />
        </View>
    )
}

export default EditScreen
