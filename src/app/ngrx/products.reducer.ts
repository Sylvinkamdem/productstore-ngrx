import { Action } from "@ngrx/store";
import { ProductsState, ProductsStateEnum } from "../state/produts.state";
import { ProductsActions, ProductsActionsType } from "./products.actions";

const initState: ProductsState = {
    products: [],
    errorMessage: '',
    dataState:ProductsStateEnum.INITIAL
}

export function productReducer(state: ProductsState=initState, action:Action):ProductsState {
    switch (action.type) {
        /* GET ALL PRODUCT */
        case ProductsActionsType.GET_ALL_PRODUCTS:
            return { ...state, dataState: ProductsStateEnum.LOADING };
        case ProductsActionsType.GET_ALL_PRODUCTS_SUCCESS:
            return { ...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload };
        case ProductsActionsType.GET_ALL_PRODUCTS_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload };
        /* GET SELECTED PRODUCT */
        case ProductsActionsType.GET_SELECTED_PRODUCTS:
            return { ...state, dataState: ProductsStateEnum.LOADING };
        case ProductsActionsType.GET_SELECTED_PRODUCTS_SUCCESS:
            return { ...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload };
        case ProductsActionsType.GET_SELECTED_PRODUCTS_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload };
        default:
            return { ...state };
    }
}