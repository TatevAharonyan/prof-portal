import {
    OPEN_JOB_OFFERS,
} from "../constaat/constants";

const initialState = {
    announcementName: "",
}

export const jobReduser = (state = initialState, action) => {
    console.log (action.payload, "OPEN_JOB_OFFERS");
    switch (action.type) {
        case OPEN_JOB_OFFERS:
            return {
                ...state,
                announcementName: action.payload,
            };
        default:
            return state;
    }
}