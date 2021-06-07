import { ENTER_EMAIL, ENTER_PASS } from "../constaat/constants"



export const enterEmail = (e) => {
    return {
        type: ENTER_EMAIL,
        payload: e.target.value,
    }
}

export const enterPass = (e) => {
    return {
        type: ENTER_PASS,
        payload: e.target.value,
    }
}
