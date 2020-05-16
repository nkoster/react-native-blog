import createDataContext from './createDataContext'

const droneReducer = (state, action) => {
    switch(action.type) {
        case 'add_dronepost':
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
            }]
        case 'del_dronepost':
            return state.filter(dronePost => dronePost.id !== action.payload)
        case 'edit_dronepost':
            return state.map(dronePost => 
                dronePost.id === action.payload.id ? action.payload : dronePost)
        default:
            return state
    }
}

const addDronePost = dispatch => {
    return async (title, content, callback) => {
        try {
            await console.log('slow monkey API') // this can be a slow API call
            dispatch({ type: 'add_dronepost', payload: { title, content }})
            callback()
        } catch(err) {
            console.log('hey', err)
        }
    }
}

const delDronePost = dispatch => {
    return id => dispatch({ type: 'del_dronepost', payload: id })
}

const editDronePost = dispatch => {
    return (id, title, content) => {
        dispatch({ type: 'edit_dronepost', payload: { id, title, content }})
    }
}

export const { Context, Provider } = createDataContext(
    droneReducer,
    { addDronePost, delDronePost, editDronePost },
    [ { title: 'Master Post', content: 'http://drone-existence.com', id: 0} ]
)
