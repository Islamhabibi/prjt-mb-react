import { ALLCUSTOMER, GETCURRENTCUST, GETUSER, GETUSERCUSTOMER, LOGINCUSTOMER, REGISTERCUSTOMER } from "../Actiontype/CustomerActionType"
import {  LOGOUT } from "../Actiontype/TeamActionType"

const initialState ={
    customers:[],
    customer:{}
}
export const reducer_customer =  (state = initialState, { type, payload }) => {
    switch (type) {
        case REGISTERCUSTOMER:
        case LOGINCUSTOMER:   
            localStorage.setItem('tokenCustomer',payload.token)
            return { ...state, customers: payload.user }
        case  ALLCUSTOMER:
            return {...state,customers: payload}   
        case GETUSERCUSTOMER: 
            return{...state,customer:payload}   
        case GETCURRENTCUST:
        return{...state, customer: payload}  
        case LOGOUT:
            return{...state, customer: {}}
        default:
            return state
    }
}