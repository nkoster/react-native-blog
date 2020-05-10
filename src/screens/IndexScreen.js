import React, { useContext } from 'react'
import { Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context as DroneContext } from '../context/DroneContext'
import { Ionicons } from '@expo/vector-icons'

const IndexScreen = ({navigation}) => {
    const { state, addDronePost, delDronePost } = useContext(DroneContext)
    return (
        <View>
            <Button
                title='add Drone post'
                onPress={addDronePost}
            />
            <FlatList
                data={state}
                keyExtractor={dronePost => String(dronePost.id)}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={_ => navigation.navigate('ShowScreen', { id: item.id })}
                        >
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity
                                    onPress={_ => delDronePost(item.id)}
                                >
                                    <Ionicons name='ios-trash' size={28} color='#666' />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: _ => (
            <TouchableOpacity
                onPress={_ => navigation.navigate('CreateScreen')}
            >
                <Ionicons name='ios-add-circle' size={34} color='#696' />
            </TouchableOpacity>
        )
    }
}

const styles = {
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        borderBottomWidth: 1,
        borderColor: 'silver'
    },
    icon: {
        marginVertical: 5
    },
    title: {
        fontSize: 18
    }
}

export default IndexScreen
