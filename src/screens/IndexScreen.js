import React, { useContext } from 'react'
import { Text, View, FlatList } from 'react-native'
import DroneContext from '../context/DroneContext'

const IndexScreen = _ => {
    const dronePosts = useContext(DroneContext)
    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList
                data={dronePosts}
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
