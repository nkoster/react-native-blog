import React, { useContext } from 'react'
import { Context } from '../context/DroneContext'
import DronePostForm from '../components/DronePostForm'

const CreateScreen = ({navigation}) => {
    // app state:
    const { addDronePost } = useContext(Context)
    return (
        <DronePostForm
            onSubmit={(title, content) => {
                addDronePost(title, content, _ => navigation.navigate('IndexScreen'))
            }}
        />
    )
}

export default CreateScreen
