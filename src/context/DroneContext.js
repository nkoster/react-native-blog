import React, { useReducer } from 'react'

const DroneContext = React.createContext()

const droneReducer = (state, action) => {
    switch(action.type) {
        case 'add_dronepost':
            return [...state, { title: `drone post ${state.length + 1}`}]
        default:
            return state
    }
}
export const DroneProvider = ({children}) => {
    const [dronePosts, dispatch] = useReducer(droneReducer, [])
    const addDronePost = _ => {
        dispatch({ type: 'add_dronepost'})
    }
    return (
        <DroneContext.Provider value={{ data: dronePosts, addDronePost }}>
            {children}
        </DroneContext.Provider>
    )
}

export default DroneContext
