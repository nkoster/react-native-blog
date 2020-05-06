import createDataContext from './createDataContext'

const droneReducer = (state, action) => {
    switch(action.type) {
        case 'add_dronepost':
            return [...state, { title: `drone post ${state.length + 1}`}]
        default:
            return state
    }
}

const addDronePost = dispatch => {
    return _ => dispatch({ type: 'add_dronepost'})
}

export const { Context, Provider } = createDataContext(
    droneReducer,
    { addDronePost },
    []
)
