import axios  from "axios";
import { ADDCATEGORIE, GETCATEGORIE, ONECATEGORIE } from "../Actiontype/CategorieActionType";
export const GetCategories=() => async(dispatch) =>
{
    try {
        const res= await axios
            .get('/categories/all')
            .then((res)=>dispatch({type:GETCATEGORIE,payload:res.data.AllCategories}))
            //console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

export const GetCategorie=(id) => async(dispatch) =>
{
    try {
        const res= await axios
            .get('/categories/detailcatg/'+id)
            .then((res)=>dispatch({type:ONECATEGORIE,payload:res.data.ProductCatg}))
           // console.log(res)
    } catch (error) {
        console.log(error)
    }
}

export const AddCategorie=(data,navigate) => async (dispatch) =>
{
    try {
        const res = await axios
            .post('/categories/addcategorie',data)//team (dans le server)/ dans le teamRoutes
            .then((res) => (GetCategories()));
            navigate('/category-list')
    } catch (error) {
        console.log(error)
    }
}
export const DeleteCategorie =(id) => async(dispatch) =>
{
    try {
        const res = await axios
          .delete("/categories/deletecatg/"+id)
          .then((res) => dispatch(GetCategories()));
      } catch (error) {
        console.log(error);
      }
}

export const Updatecategorie =(id,data,navigate) => async (dispatch) =>
{
    try {
        const res = await axios
            .put('/categories/updatecatg/'+id,data)
            .then((res)=>dispatch(GetCategorie(id)))
            navigate('/category-list')
    } catch (error) {
        console.log(error);
    }
}