import axios from 'axios'
import {ALLTEAM, GETCURRENT, GETUSER, LOGINTEAM, LOGOUT, REGISTERTEAM} from '../Actiontype/TeamActionType'
export const RegisterTeam =(data,navigate) => async (dispatch) =>
{
    try {
        const res = await axios
            .post('/team/adduser',data)//team (dans le server)/ dans le teamRoutes
            dispatch({type: REGISTERTEAM, payload: res.data})
            navigate('/dashboard')
    } catch (error) {
        console.log(error)
    }
}

export const GetUsersTeam=() => async(dispatch) =>
{
    try {
        const res= await axios
            .get('/team/all')
            .then((res)=>dispatch({type:ALLTEAM,payload:res.data.AllUsers}))
            //console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

export const GetUser = (id) => async(dispatch) =>
{ 
    try {
        const res=await axios
            .get('/team/user/'+id)
            .then((res)=>dispatch({type:GETUSER,payload:res.data.userdata}))
           // console.log(res)
    } catch (error) {
        console.log(error)
    }
}

export const UpdateUser = (id,data,navigate) => async(dispatch) =>
{
    try {
        const res=await axios
            .put('/team/updateuser/'+id,data)
            .then((res)=>dispatch(GetUser(id)))
             navigate('/admin/all-team')
    } catch (error) {
        console.log(error)
    }
}

export const DeleteUser = (id) => async (dispatch) =>
{
    try {
        const res = await axios
            .delete('/team/deleteUser/'+id)
            .then((res)=>dispatch(GetUsersTeam()))
            //console.log(res)
    } catch (error) {
        console.log(error)
    }
}
export const LoginUser = (data,navigate) => async (dispatch) =>
{
    try {
        const res = await axios
            .post('/team/login',data)
            .then((res=>dispatch({type:LOGINTEAM, payload:res.data})))
            navigate('/admin/dashboard')
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
        .get("/team/getcurrent",config) 
        .then(res=>dispatch({type:GETCURRENT,payload:res.data}))
    } catch (error) {
        console.log(error)
    }
}
export const logout = (navigate)=>{
    localStorage.removeItem('tokenuser')
    navigate('/auth/login')
    return{
      type:LOGOUT
    }
  }