import axios from 'axios'
import { ALLPRODUCT, ONEPRODUCT, PRODUCTCATG } from '../Actiontype/CategorieActionType'

export const GetAllProducts = () => async(dispatch) => 
{
    try {
        const res = await axios
            .get('/product/all/')
            .then((res) => dispatch({ type: ALLPRODUCT, payload: res.data.AllProducts }))
     } catch (error) {
        console.log(error);
    }
}
export const GetProductsbyCatg = (name) => async(dispatch) => 
{console.log(name)
    try {
      
        const res = await axios
            .get('/product/prodcatg/'+name)//,productCount:res.data.productCount
            if (res.data && res.data.ProductCatg) {
              dispatch({ type: PRODUCTCATG, payload: res.data.ProductCatg });
            } else {
              console.error('La réponse de la requête ne contient pas ProductCatg ou est undefined.');
            }
          } catch (error) {
        console.log(error);
    }
}

export const AddProduct = (data,navigate) => async (dispatch) => {
    try {
      const res = await axios
        .post('/product/addproduct/',data)
        .then((res) =>dispatch (GetAllProducts()))
        navigate('/product-list')
         
    } catch (error) {
      console.log(error);
    }
  
  };
  
  export const DeleteProduct = (id) => async (dispatch) => {
    try {
      const res = await axios
        .delete("/product/deleteprod/"+id)
        .then((res) => dispatch(GetAllProducts()));
    } catch (error) {
      console.log(error);
    }
  
  };
  export const UpdateProduct = (id,data,navigate) => async (dispatch) => {
    try {
      const res = await axios
        .put("/product/updateprod/"+id,data)
        .then((res) => dispatch(GetAllProducts()));
        navigate('/product-list')
    } catch (error) {
      console.log(error);
    }

  };
  export const FindProduct = (id) => async (dispatch) => {
    try {
      const res = await axios
        .get("/product/detailprod/"+id)
        .then((res) => dispatch({ type: ONEPRODUCT, payload: res.data.product }));
    } catch (error) {
      console.log(error);
    }
  };

  export const DeleteManyProduct = (data,navigate)=> async(dispatch)=>
  {
    try {
      const res= await axios
        .delete('/product/deletemanyprod',data)
        .then((res)=>dispatch(GetAllProducts()))
        navigate('/product-list')
    } catch (error) {
      console.log(error);
    }
  }
  export const addToBasket = (data)=>{
    //data c'est un object qui contient le product et la quantity data={product:e, quantity:3}
    return {
    type:"ADDTOBASKET",
    payload: data
    }
  }

export const removeFromBasket = (id)=>{
 return{
    type:"REMOVEFROMBASKET",
    payload:id
 }
}