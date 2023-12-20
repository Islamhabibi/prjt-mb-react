import { GETCATEGORIE, ONECATEGORIE } from "../Actiontype/CategorieActionType"

const initialState ={
    categories:[],
    categorie:{}
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