import React, { useContext, useEffect } from 'react'
import { Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context as DroneContext } from '../context/DroneContext'
import { Ionicons } from '@expo/vector-icons'

const IndexScreen = ({navigation}) => {
    const { state, delDronePost, getDronePosts } = useContext(DroneContext)
    useEffect(_ => {
        getDronePosts()
        const listener = navigation.addListener('didFocus', _ => {
            getDronePosts()
        })
        return _ => { listener.remove() } // subtile: function does not return!
    }, [])
    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={dronePost => String(dronePost.id)}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={_ => navigation.navigate('ShowScreen', { id: item.id })}
                        >
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity
                                    onPress={_ => delDronePost(item.id)}
                                >
                                    <Ionicons style={styles.icon} name='ios-trash' size={28} color='#666' />
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
                <Ionicons style={styles.icon} name='ios-add-circle' size={34} color='#696' />
            </TouchableOpacity>
        )
    }
}

const styles = {
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 4,
        borderBottomWidth: 1,
        borderColor: 'silver',
        marginTop: 7
    },
    icon: {
        marginRight: 7
    },
    title: {
        fontSize: 18,
        paddingLeft: 4
    }
}

export default IndexScreen
