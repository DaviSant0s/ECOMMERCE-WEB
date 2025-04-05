import * as productsTypes from "../context/productsContext/productsTypes";
import { getRequest, postFormDataRequest } from "./api";


export const getAllProducts = async (dispatch) => {

    dispatch({ type: productsTypes.GET_ALL_PRODUCTS_REQUEST});

    try {

        const data = await getRequest('http://localhost:3000/api/product/getProducts');

        dispatch({ 
            type: productsTypes.GET_ALL_PRODUCTS_SUCCESS, 
            payload: { products: data.products}
        });
        
    } catch (error) {

        dispatch({ 
            type: productsTypes.GET_ALL_PRODUCTS_FAILURE, 
            payload: { error: error.message}
        });
        
    }

}

export const getProductsBySlug = async (/*dispatch,*/ slug) => {

    /*dispatch({ type: productsTypes.GET_ALL_PRODUCTS_REQUEST});*/

    try {

        const products = await getRequest(`http://localhost:3000/api/products/${slug}`);

        console.log(products);

        /*
        dispatch({ 
            type: productsTypes.GET_ALL_PRODUCTS_SUCCESS, 
            payload: { products: data.products}
        });
        */
        
    } catch (error) {
        /*
        dispatch({ 
            type: productsTypes.GET_ALL_PRODUCTS_FAILURE, 
            payload: { error: error.message}
        });
        */
        
    }

}

