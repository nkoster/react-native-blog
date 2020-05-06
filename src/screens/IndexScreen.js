import React, { useContext } from 'react'
import { Text, View, FlatList, Button } from 'react-native'
import { Context as DroneContext } from '../context/DroneContext'

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
                        <Text>{item.title}</Text>
                    )
                }}
            />
        </View>
    )
}

export default IndexScreen
