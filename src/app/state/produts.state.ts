import { Product } from "../model/product.model";

export interface ProductsState{
    products: Product[],
    errorMessage: string
    dataState:ProductsStateEnum
}

export enum ProductsStateEnum{
    LOADING='Loading',
    LOADED='Loaded',
    ERROR='Error',
    INITIAL='Initial'
}