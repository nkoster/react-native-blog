import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const droneReducer = (state, action) => {
    switch(action.type) {
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

const addDronePost = _ => {
    return async (title, content, callback) => {
        await jsonServer.post('/droneposts', { title, content })
        callback ? callback() : null
    }
}

const delDronePost = dispatch => {
    return async id => {
        await jsonServer.delete(`/droneposts/${id}`)
        dispatch({ type: 'del_dronepost', payload: id })
    }
}

const editDronePost = dispatch => {
    return async (id, title, content) => {
        await jsonServer.put(`/droneposts/${id}`, {
            title, content
        })
        dispatch({ type: 'edit_dronepost', payload: { id, title, content }})
    }
}

export const { Context, Provider } = createDataContext(
    droneReducer,
    { getDronePosts, addDronePost, delDronePost, editDronePost },
    []
)
