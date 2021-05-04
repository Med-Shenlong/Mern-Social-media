import { GET_POST_ERRORS } from "../actions/post.actions";
import { GET_USER_ERRORS } from "../actions/user.actions";


const intialState = { userError: [], postError: [] };

export default function errorReducer(state = intialState, action) {
    switch (action.type) {
        case GET_POST_ERRORS:
            return {
                postError: action.payload,
                userError: []
            }
        case GET_USER_ERRORS:
            return {
                userError: action.payload,
                postError: []
            }
        default:
            return state;
    }
}