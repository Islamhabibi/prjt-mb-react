import { ALLPRODUCT, GETCATEGORIE, ONECATEGORIE, ONEPRODUCT, PRODUCTCATG } from "../Actiontype/CategorieActionType"

const initialState ={
    categories:[],
    categorie:{},
    products: [],
    productsByCategory: [],
    product:{},
    basket: []
}
export const reducer_categorie =  (state = initialState, { type, payload }) => {
    switch (type) {
        
        case GETCATEGORIE:
            return { ...state, categories: payload }
        case ONECATEGORIE:
            return { ...state, categorie: payload } 
        default:
            return state
    }
}

export const reducer_product =  (state = initialState, { type, payload }) => {
    switch (type) {
        
        case ALLPRODUCT:
            return { ...state, products: payload }
        case ONEPRODUCT:
            return { ...state, product: payload } 
        case PRODUCTCATG:
            return {...state,productsByCategory:payload}    
        case "ADDTOBASKET":
            return{...state, basket:[...state.basket,payload]}
        case "REMOVEFROMBASKET":
        return{...state, basket:state.basket.filter(e=>e.pro._id !== payload)}     
        default:
            return state
    }
}