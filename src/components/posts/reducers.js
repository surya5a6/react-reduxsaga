import { ADD_POST, DELETE, EDIT_POST, UPDATE  } from './actions';

const initialState = {
    posts : []
}

const reducer = ( state = [], action) => {
    switch(action.type){
        case ADD_POST :
           console.log("reducer")
           return state.concat([action.data])
        case DELETE :
           return state.filter(post => post.id != action.id )
        case EDIT_POST :
            return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post)
        case UPDATE :
            return state.map((post) => {
                if (post.id === action.id) {
                return {
                ...post,
                title: action.data.newTitle,
                message: action.data.newMessage,
                editing: !post.editing
                }
                } else return post;
                })
        default:
            return state;       
    }
}

export default reducer;