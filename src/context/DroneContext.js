import createDataContext from './createDataContext'

const droneReducer = (state, action) => {
    switch(action.type) {
        case 'add_dronepost':
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                title: `drone post ${state.length + 1}`
            }]
        case 'del_dronepost':
            return state.filter(dronePost => dronePost.id !== action.payload)
        default:
            return state
    }
}

const addDronePost = dispatch => {
    return _ => dispatch({ type: 'add_dronepost'})
}

const delDronePost = dispatch => {
    return id => dispatch({ type: 'del_dronepost', payload: id })
}

export const { Context, Provider } = createDataContext(
    droneReducer,
    { addDronePost, delDronePost },
    []
)
