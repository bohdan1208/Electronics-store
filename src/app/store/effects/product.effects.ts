import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {ProductPriceRange} from '../../interfaces/interface';
import {ProductService} from '../../services/product.service';
import {loadProducts, loadProductsSuccess, loadProductsFailure} from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  private actions$ = inject(Actions);

  constructor(private productService: ProductService) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(({offset, params}) => {
        return this.productService.getProducts().pipe(
          map(products => {
            let filteredProducts = [...products];

            if (params?.name) {
              filteredProducts = filteredProducts
                .filter(product => product.name.toLowerCase().includes(params?.name.toLowerCase()));
            }

            if (params?.price) {
              filteredProducts = filteredProducts
                .filter(product => product.price < params.price);
            }

            if (params?.type && params.type.length) {
              filteredProducts = filteredProducts
                .filter(product => params.type.includes(product.type));
            }

            if (params?.priceRange && params?.priceRange.length) {
              filteredProducts = filteredProducts.filter(product => {
                return params.priceRange.some(range => {
                  switch (range) {
                    case ProductPriceRange.LOW:
                      return product.price >= 0 && product.price <= 100;
                    case ProductPriceRange.MEDIUM:
                      return product.price > 100 && product.price <= 250;
                    case ProductPriceRange.HARD:
                      return product.price > 250;
                    default:
                      return false;
                  }
                });
              });
            }

            return loadProductsSuccess({ products: filteredProducts.splice(0, offset || 10) });
          }),
          catchError(error => of(loadProductsFailure({ error })))
        );
      })
    )
  );
}
