import { ENTER_EMAIL, ENTER_PASS } from "../constaat/constants";


const initialState = {
    email: "",
    pass: "",
}

export const signInReduser = (state = initialState, action) => {
    console.log (action.payload, "SIGNIN_action")
    switch (action.type) {
        case ENTER_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case ENTER_PASS: 
        return {
            ...state,
            pass: action.payload,
        };

        default:
            return state;
    }
}