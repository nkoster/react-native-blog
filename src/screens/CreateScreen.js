import React, { useContext, useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { Context } from '../context/DroneContext'

const CreateScreen = ({navigation}) => {
    // app state:
    const { addDronePost } = useContext(Context)
    // local state, for the form:
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    return (
        <View>
            <Text style={styles.label} >Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
            <Text style={styles.label}>Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)} />
            <Button
                title='Add Drone Post'
                onPress={_ => addDronePost(title, content, navigation.navigate('IndexScreen'))}
            />
        </View>
    )
}

const styles = {
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'silver',
        borderRadius: 4,
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        margin: 6
    }
}
export default CreateScreen
