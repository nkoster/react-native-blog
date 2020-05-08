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
                            <Text>{item.title}</Text>
                            <Ionicons name="md-checkmark-circle" size={32} color="green" />
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
        justifyContent: 'space-between'
    },
    icon: {
        height: 10
    }
}

export default IndexScreen
