import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";

export enum ProductsActionsType{
    GET_ALL_PRODUCTS = '[Product] Get All products',
    GET_ALL_PRODUCTS_SUCCESS = '[Product] Get All products Success',
    GET_ALL_PRODUCTS_ERROR = '[Product] Get All products Error',

    GET_SELECTED_PRODUCTS = '[Product] Get Selected products',
    GET_SELECTED_PRODUCTS_SUCCESS = '[Product] Get Selected products Success',
    GET_SELECTED_PRODUCTS_ERROR = '[Product] Get Selected products Error',

    GET_AVAILABLE_PRODUCTS = '[Product] Get Available products',
    SEARCH_PRODUCTS = '[Product] Searche products',
    NEW_PRODUCT = '[Product] New product',
    SELECT_PRODUCT = '[Product] Select product',
    EDIT_PRODUCT = '[Product] Edit product',
    DELETE_PRODUCT = '[Product] Delete product',
    PRODUCT_ADDED = '[Product] product Added',
    PRODUCT_UPDATED = '[Product] product Updated',
    PRODUCT_DELETED = '[Product] product Deleted',
}

export class GetAllProductsAction implements Action{
    type: ProductsActionsType = ProductsActionsType.GET_ALL_PRODUCTS;
    
    constructor(public payload:any) {        
    }
}

export class GetAllProductsActionSuccess implements Action {
    type: ProductsActionsType = ProductsActionsType.GET_ALL_PRODUCTS_SUCCESS;

    constructor(public payload:Product[]) {
    }
}

export class GetAllProductsActionError implements Action {
    type: ProductsActionsType = ProductsActionsType.GET_ALL_PRODUCTS_ERROR;

    constructor(public payload: string) {
    }
}

/* GET SELECTED PRODUCT ACTIONS */
export class GetSelectedProductsAction implements Action {
    type: ProductsActionsType = ProductsActionsType.GET_SELECTED_PRODUCTS;

    constructor(public payload: any) {
    }
}

export class GetSelectedProductsActionSuccess implements Action {
    type: ProductsActionsType = ProductsActionsType.GET_SELECTED_PRODUCTS_SUCCESS;

    constructor(public payload: Product[]) {
    }
}

export class GetSelectedProductsActionError implements Action {
    type: ProductsActionsType = ProductsActionsType.GET_SELECTED_PRODUCTS_ERROR;

    constructor(public payload: string) {
    }
}

export type ProductsActions = GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError
    | GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError;;