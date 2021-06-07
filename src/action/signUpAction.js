import {
    ENTER_NEW_EMAIL,
    ENTER_NEW_PASS,
    ENTER_NEW_BIRTHDAY,
    ENTER_NEW_FIRSTNAME,
    ENTER_NEW_LASTNAME,
    ENTER_NEW_COUNTRIES
} from "../constaat/constants";

export const enterUserEmail = (e) => {
    return {
        type: ENTER_NEW_EMAIL,
        payload: e.target.value,
    }
}


export const enterUserPass = (e) => {
    return {
        type: ENTER_NEW_PASS,
        payload: e.target.value,
    }
}

export const enterUserBirthday = (e) => {
    return {
        type: ENTER_NEW_BIRTHDAY,
        payload: e.target.value,
    }
}

export const enterUserFirstName = (e) => {
    return {
        type: ENTER_NEW_FIRSTNAME,
        payload: e.target.value,
    }
}

export const enterUserLastName = (e) => {
    return {
        type: ENTER_NEW_LASTNAME,
        payload: e.target.value,
    }
}

export const enterUserCountries = (countries) => {
    return {
        type: ENTER_NEW_COUNTRIES,
        payload: countries,
    }
}