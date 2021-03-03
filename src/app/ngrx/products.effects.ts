import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ProductsService } from "../services/products.service";
import { GetAllProductsActionError, GetAllProductsActionSuccess, GetSelectedProductsActionError, GetSelectedProductsActionSuccess, ProductsActions, ProductsActionsType } from "./products.actions";

@Injectable()
export class ProductsEffects {
    constructor(private productsService: ProductsService, private effectActions:Actions) {
    }

    getAllProductsEffects: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(ProductsActionsType.GET_ALL_PRODUCTS),
            mergeMap((action) => {
                return this.productsService.getAllProducts().pipe(
                    map((products) => new GetAllProductsActionSuccess(products)),
                    catchError((err)=>of(new GetAllProductsActionError(err.message)))
                );
            })
        ));
    
    getSelectedProductsEffects: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(ProductsActionsType.GET_SELECTED_PRODUCTS),
            mergeMap((action) => {
                return this.productsService.getSelectedProducts().pipe(
                    map((products) => new GetSelectedProductsActionSuccess(products)),
                    catchError((err) => of(new GetSelectedProductsActionError(err.message)))
                );
            })
        ));
}