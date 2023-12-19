import axios from 'axios'
import { ALLCUSTOMER, GETUSER, LOGINCUSTOMER, REGISTERCUSTOMER } from '../Actiontype/CustomerActionType'
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
            console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

export const GetUser = (id) => async(dispatch) =>
{ 
    try {
        const res=await axios
            .get('/customer/user/'+id)
            .then((res)=>dispatch({type:GETUSER,payload:res.data.userdata}))
            console.log(res)
    } catch (error) {
        console.log(error)
    }
}

export const UpdateUser = (id,data,navigate) => async(dispatch) =>
{
    try {
        const res=await axios
            .put('/customer/updateuser/'+id,data)
            .then((res)=>dispatch(GetUser(id)))
             navigate('/dashboard')
    } catch (error) {
        console.log(error)
    }
}

export const DeleteUser = (id) => async (dispatch) =>
{
    try {
        const res = await axios
            .delete('/customer/deleteUser/'+id)
            .then((res)=>dispatch(GetUsersCustomer()))
            console.log(res)
    } catch (error) {
        console.log(error)
    }
}
export const LoginUser = (data,navigate) => async (dispatch) =>
{
    try {
        const res = await axios
            .post('/customer/login',data)
            .then((res=>dispatch({type:LOGINCUSTOMER, payload:res.data})))
            navigate('/dashboard')
    } catch (error) {
        console.log(error)
    }
}

export const getcurrent=()=>async(dispatch)=>
{
    const config={
        headers:{token:localStorage.getItem("tokenuser")}
    }
    try {
       const res=await axios
        .get("/customer/getcurrent",config) 
        .then(res=>dispatch({type:GETCURRENT,payload:res.data}))
    } catch (error) {
        console.log(error)
    }
}
export const logout = (navigate)=>
{
    localStorage.removeItem('tokenuser')
    navigate('/login')
    return{
      type:LOGOUT
    }
  }