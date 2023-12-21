import axios from 'axios'
import { ALLPRODUCT, ONEPRODUCT } from '../Actiontype/CategorieActionType'

export const GetAllProducts = () => async(dispatch) => 
{
    try {
        const res = await axios
            .get('/product/get/')
            .then((res) => dispatch({ type: ALLPRODUCT, payload: res.data.AllProducts }))
    } catch (error) {
        console.log(error);
    }
}

export const AddProduct = (data) => async (dispatch) => {
    try {
      const res = await axios
        .post("/product/post/",data)
        .then((res) => dispatch(GetAllProducts()));
    } catch (error) {
      console.log(error);
    }
  
  };
  export const DeleteProduct = (id) => async (dispatch) => {
    try {
      const res = await axios
        .delete("/product/delete/"+id)
        .then((res) => dispatch(GetAllProducts()));
    } catch (error) {
      console.log(error);
    }
  
  };
  export const UpdateProduct = (id,data) => async (dispatch) => {
    try {
      const res = await axios
        .put("/product/update/"+id,data)
        .then((res) => dispatch(GetAllProducts()));
    } catch (error) {
      console.log(error);
    }

  };
  export const FindProduct = (id) => async (dispatch) => {
    try {
      const res = await axios
        .get("/product/get/"+id)
        .then((res) => dispatch({ type: ONEPRODUCT, payload: res.data.product }));
    } catch (error) {
      console.log(error);
    }
  };