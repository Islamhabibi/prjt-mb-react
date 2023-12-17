import axios from 'axios'
import {ALLTEAM, GETUSER, REGISTERTEAM} from '../Actiontype/TeamActionType'
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
            console.log(res.data)
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
            console.log(res)
    } catch (error) {
        console.log(error)
    }
}

export const UpdateUser = (id,data) => async(dispatch) =>
{
    try {
        const res=await axios
            .put('/team/updateuser/'+id,data)
            .then((res)=>dispatch(GetUser(id)))
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
            console.log(res)
    } catch (error) {
        
    }
}