import { createAction, props } from '@ngrx/store';
import {Product, ProductFilterParams} from '../../interfaces/interface';

export const loadProducts = createAction(
  '[Product List] Load Products',
  props<{offset: number, limit: number, params?: ProductFilterParams}>()
);

export const loadProductsSuccess = createAction(
  '[Product List] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product List] Load Products Failure',
  props<{ error: any }>()
);

export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
);

export const removeProduct = createAction(
  '[Product] Remove Product',
  props<{ productId: number }>()
);
