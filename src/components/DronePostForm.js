import React, { useState } from 'react'
import { Text, View, Button, TextInput } from 'react-native'

const DronePostForm = ({ onSubmit, initialValues }) => {
    // local state, for the form:
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)
    return (
        <View>
            <Text style={styles.label} >Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
            <Text style={styles.label}>Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)} />
            <Button
                title='Save'
                onPress={_ => onSubmit(title, content)}
            />
        </View>
    )
}

DronePostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
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

export default DronePostForm
