import axios from 'axios'
import { ALLCUSTOMER, GETCURRENTCUST, GETUSERCUSTOMER,  LOGINCUSTOMER,  REGISTERCUSTOMER } from '../Actiontype/CustomerActionType'
import {  GETCURRENT,LOGOUT } from '../Actiontype/TeamActionType'
export const RegisterCustomer =(data,navigate) => async (dispatch) =>
{
    try {
        const res = await axios
            .post('/customer/register',data)//team (dans le server)/ dans le teamRoutes
            dispatch({type: REGISTERCUSTOMER, payload: res.data})
            navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const GetUsersCustomer=() => async(dispatch) =>
{
    try {
        const res= await axios
            .get('/customer/all')
            .then((res)=>dispatch({type:ALLCUSTOMER,payload:res.data.AllCustomers}))
           // console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

export const GetUser = (id) => async(dispatch) =>
{ 
    try {
        const res=await axios
            .get('/customer/user/'+id)
            .then((res)=>dispatch({type:GETUSERCUSTOMER,payload:res.data.userdata}))
            //console.log(res)
    } catch (error) {
        console.log(error)
    }
}

export const UpdateUser = (id,data,navigate) => async(dispatch) =>
{
    try {
        const res=await axios
            .put('/customer/updateuser/',data)
            .then((res)=>dispatch(GetUser(id)))
             navigate('/dashboard')
    } catch (error) {
        console.log(error)
    }
}

export const DeleteOneCustomer = (id) => async (dispatch) =>
{
    try {
        const res = await axios
            .delete('/customer/deletcustomer/'+id)
            .then((res)=>dispatch(GetUsersCustomer()))
           // console.log(res)
    } catch (error) {
        console.log(error)
    }
}
export const Logincustomer = (data,navigate) => async (dispatch) =>
{
    try {
        const res = await axios
            .post('/customer/login',data)
            .then((res=>dispatch({type:LOGINCUSTOMER, payload:res.data})))
            navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const getcurrentcustomer=()=>async(dispatch)=>
{
    const config={
        headers:{token:localStorage.getItem("tokenCustomer")}
    }
    try {
       const res=await axios
        .get("/customer/getcurrent",config) 
        .then(res=>dispatch({type:GETCURRENTCUST,payload:res.data}))
    } catch (error) {
        console.log(error)
    }
}
export const logout = (navigate)=>
{
    localStorage.removeItem('tokenCustomer')
    navigate('/')
    return{
      type:LOGOUT
    }
  }