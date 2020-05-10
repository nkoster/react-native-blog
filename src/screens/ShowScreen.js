import React, { useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Context } from '../context/DroneContext'
import { MaterialIcons } from '@expo/vector-icons'

const ShowScreen = ({navigation}) => {
    const { state } = useContext(Context)
    const dronePost = state.find(data => data.id === navigation.getParam('id'))
    return (
        <View>
            <Text>{dronePost.title}</Text>
            <Text>{dronePost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: _ => (
            <TouchableOpacity onPress={_ => navigation.navigate('EditScreen')} >
                <MaterialIcons style={styles.icon} name='mode-edit' size={34} color='#696' />
            </TouchableOpacity>
        )
    }
}

const styles = {
    icon: {
        marginRight: 7
    }
}

export default ShowScreen
