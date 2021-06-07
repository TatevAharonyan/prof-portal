import { ENTER_NEW_EMAIL, 
    ENTER_NEW_PASS,
    ENTER_NEW_BIRTHDAY,
    ENTER_NEW_FIRSTNAME,
    ENTER_NEW_LASTNAME,
    ENTER_NEW_COUNTRIES } from "../constaat/constants";


const initialState = {
    email: "",
    pass: "",
    birthday: null,
    firstName: "",
    lastName: "",
    countries: "",
}

export const signUpReduser = (state = initialState, action) => {
    console.log (action.payload, "SIGNUP_action")
    switch (action.type) {
        case ENTER_NEW_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case ENTER_NEW_PASS: 
        return {
            ...state,
            pass: action.payload,
        };
        case ENTER_NEW_BIRTHDAY: 
        return {
            ...state,
            birthday: action.payload,
        };
        case ENTER_NEW_FIRSTNAME: 
        return {
            ...state,
            firstName: action.payload,
        };
        case ENTER_NEW_LASTNAME: 
        return {
            ...state,
            lastName: action.payload,
        };
        case ENTER_NEW_COUNTRIES: 
        return {
            ...state,
            countries: action.payload,
        };


        default:
            return state;
    }
}