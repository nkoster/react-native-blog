import React from 'react'

const DroneContext = React.createContext()

export const DroneProvider = ({children}) => {
    const dronePosts = [
        { title: 'Test I' },
        { title: 'Test II' },
        { title: 'Test III' }
    ]
    return (
        <DroneContext.Provider value={dronePosts}>
            {children}
        </DroneContext.Provider>
    )
}

export default DroneContext
