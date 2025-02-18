import * as categoriesTypes from "../context/categoriesContext/categoriesTypes";
import { getRequest, postFormDataRequest } from "./api";


export const getAllCategories = async (dispatch) => {

    dispatch({ type: categoriesTypes.GET_ALL_CATEGORIES_REQUEST});

    try {

        const data = await getRequest('http://localhost:3000/api/category/getCategories');

        dispatch({ 
            type: categoriesTypes.GET_ALL_CATEGORIES_SUCCESS, 
            payload: { categories: data.categoryList}
        });

        console.log(data.categoryList)
        
    } catch (error) {

        dispatch({ 
            type: categoriesTypes.GET_ALL_CATEGORIES_FAILURE, 
            payload: { error: error.message}
        });
        
    }

}

