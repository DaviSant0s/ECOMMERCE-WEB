import { productsInitialState } from './productsInitialState';
import * as productsTypes from './productsTypes';

export const productsReducer = (state, action) => {

    switch (action.type) {
        // buscando todos os produtos
        case productsTypes.GET_ALL_PRODUCTS_REQUEST:
            return { 
                ...productsInitialState, 
                loading: true,
                error: null
            }

        case productsTypes.GET_ALL_PRODUCTS_SUCCESS:
            return { 
                ...state, 
                products: action.payload.products,
                loading: false
            }
        
        case productsTypes.GET_ALL_PRODUCTS_FAILURE:
            return { 
                ...state, 
                loading: false,
                error: action.payload.error
            }
        
        // buscando os produtos pelo slug

        case productsTypes.GET_PRODUCTS_BY_SLUG_REQUEST:
            return { 
                ...productsInitialState, 
                loading: true,
                error: null
            }

        case productsTypes.GET_PRODUCTS_BY_SLUG_SUCCESS:
            return { 
                ...state, 
                products: action.payload.products,
                productsByPrice: {...action.payload.productsByPrice},
                loading: false
            }
        
        case productsTypes.GET_PRODUCTS_BY_SLUG_FAILURE:
            return { 
                ...state, 
                loading: false,
                error: action.payload.error
            }

    }

    return state;
}
