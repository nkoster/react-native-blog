import React, { useState } from 'react'

const DroneContext = React.createContext()

export const DroneProvider = ({children}) => {
    const [dronePosts, setDronePosts] = useState([])
    const addDronePost = _ => {
        setDronePosts([...dronePosts, {
            title: `drone post ${dronePosts.length + 1}`
        }])
    }
    return (
        <DroneContext.Provider value={{
            data: dronePosts,
            addDronePost
        }}>
            {children}
        </DroneContext.Provider>
    )
}

export default DroneContext
