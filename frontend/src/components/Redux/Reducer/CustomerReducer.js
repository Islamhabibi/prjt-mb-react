import { ALLCUSTOMER, GETUSER, LOGINCUSTOMER, REGISTERCUSTOMER } from "../Actiontype/CustomerActionType"
import { GETCURRENT, LOGOUT } from "../Actiontype/TeamActionType"

const initialState ={
    customers:[],
    customer:{}
}
export const reducer_customer =  (state = initialState, { type, payload }) => {
    switch (type) {
        case REGISTERCUSTOMER:
        case LOGINCUSTOMER:   
            localStorage.setItem('tokenuser',payload.token)
            return { ...state, customers: payload.user }
        case  ALLCUSTOMER:
            return {...state,customers: payload}   
        case GETUSER: 
            return{...state,customer:payload}   
        case GETCURRENT:
        return{...state, customer: payload}  
        case LOGOUT:
            return{...state, customer: {}}
        default:
            return state
    }
}