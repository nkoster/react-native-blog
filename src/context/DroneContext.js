import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

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
        case 'get_droneposts':
            return action.payload
        default:
            return state
    }
}

const getDronePosts = dispatch => {
    return async _ => {
        const reponse = await jsonServer.get('/droneposts')
        dispatch({ type: 'get_droneposts', payload: reponse.data })
    }
}

const addDronePost = dispatch => {
    return async (title, content, callback) => {
        await jsonServer.post('/droneposts', { title, content })
        dispatch({ type: 'add_dronepost', payload: { title, content }})
        callback ? callback() : null
    }
}

const delDronePost = dispatch => {
    return id => dispatch({ type: 'del_dronepost', payload: id })
}

const editDronePost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_dronepost', payload: { id, title, content }})
        callback()
    }
}

export const { Context, Provider } = createDataContext(
    droneReducer,
    { getDronePosts, addDronePost, delDronePost, editDronePost },
    []
)
