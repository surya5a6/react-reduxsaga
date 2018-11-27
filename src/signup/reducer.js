import { SIGNUP_REQUESTING, SIGNUP_ERROR, SIGNUP_SUCCESS } from './constants'

const initialState = {  
    requesting: false,
    successful: false,
    messages: [],
    errors: [],
  }

const reducer = (state=initialState,action) =>{
    switch(action.type) {
        case SIGNUP_REQUESTING :
            return {
                requesting : true,
                successful: false,
                messages : [{body: "Signing up...",time: new Date()}],
                errors:[]
            }
        case SIGNUP_SUCCESS:
            console.log("action",action)
            return {
              errors: [],
              messages: [{
                body: `Successfully created account for ${action.response.email}`,
                time: new Date(),
              }],
              requesting: false,
              successful: true,
            }
        case SIGNUP_ERROR:
            return {
                errors: state.errors.concat([{
                    body: action.error.toString(),
                    time: new Date(),
                  }]),
                  messages: [],
                  requesting: false,
                  successful: false
            }
        default : 
            return state;
    }
}

export default reducer;