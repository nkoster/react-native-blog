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

export const { Context, Provider } = createDataContext(
    droneReducer,
    { addDronePost, delDronePost },
    [ { title: 'Master Post', content: 'http://drone-existence.com'} ]
)
