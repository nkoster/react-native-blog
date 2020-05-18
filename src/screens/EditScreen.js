import React, { useContext } from 'react'
import { Context } from '../context/DroneContext'
import DronePostForm from '../components/DronePostForm'

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    const { state, editDronePost } = useContext(Context)
    const dronePost = state.find(p => p.id === id)
    return (
        <DronePostForm
            onSubmit={(title, content) => {
                editDronePost(id, title, content, navigation.pop())
            }}
            initialValues={{ title: dronePost.title, content: dronePost.content }}
        />
    )
}

export default EditScreen
