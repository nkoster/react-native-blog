import React, { useContext } from 'react'
import { Text, View, FlatList, Button } from 'react-native'
import { Context as DroneContext } from '../context/DroneContext'
import { Ionicons } from '@expo/vector-icons'

const IndexScreen = _ => {
    const { state, addDronePost } = useContext(DroneContext)
    return (
        <View>
            <Text>Index Screen</Text>
            <Button
                title='add Drone post'
                onPress={addDronePost}
            />
            <FlatList
                data={state}
                keyExtractor={dronePost => dronePost.title}
                renderItem={({item}) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Ionicons name="ios-beer" size={24} color="brown" />
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = {
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomWidth: 1,
        borderColor: 'silver'
    },
    icon: {
        height: 10
    },
    title: {
        fontSize: 18
    }
}

export default IndexScreen
