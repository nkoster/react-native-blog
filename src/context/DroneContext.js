import React from 'react'

const DroneContext = React.createContext()

export const DroneProvider = ({children}) => {
    return (
        <DroneContext.Provider>
            {children}
        </DroneContext.Provider>
    )
}
