import { UserActionTypes } from "./action-types"

export const loginUser = (payload) => ({
    type: UserActionTypes.LOGIN,
    payload: payload
})

export const loggoutUser = () => ({
    type: UserActionTypes.LOGGOUT
})