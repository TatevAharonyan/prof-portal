import {
    OPEN_JOB_OFFERS,
} from "../constaat/constants";

export const setAnnouncementName = (name) => {
    return {
        type: OPEN_JOB_OFFERS,
        payload: name,
    }
}
