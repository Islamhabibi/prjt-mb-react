import { ALLTEAM, LOGINTEAM, REGISTERTEAM } from "../Actiontype/TeamActionType"

const initialState ={
    users:[],
    user:{}
}
export const reducer_team =  (state = initialState, { type, payload }) => {
    switch (type) {
        case REGISTERTEAM:
        case LOGINTEAM:   
            localStorage.setItem('tokenuser',payload.token)
            return { ...state, users: payload.user }
        case  ALLTEAM:
            return {...state,users: payload}   
             
        default:
            return state
    }
}