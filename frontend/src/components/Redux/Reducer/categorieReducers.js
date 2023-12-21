import { ALLPRODUCT, GETCATEGORIE, ONECATEGORIE, ONEPRODUCT } from "../Actiontype/CategorieActionType"

const initialState ={
    categories:[],
    categorie:{},
    products: [],
    product:{}
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
        default:
            return state
    }
}