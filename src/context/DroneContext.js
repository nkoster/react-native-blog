import React from 'react'

const DroneContext = React.createContext()

export const DroneProvider = ({children}) => {
    return (
        <DroneContext.Provider value={{
            name: 'niels'
        }}>
            {children}
        </DroneContext.Provider>
    )
}

export default DroneContext
