// product.selectors.ts
import { createSelector } from '@ngrx/store';
import {AppState, ProductState} from '../../interfaces/interface';

export const selectProductState = ({ productState }: AppState) => productState;

export const selectProductData = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);

export const selectSelectedProductData = createSelector(
  selectProductState,
  (state: ProductState) => state.selectedProducts
);

export const selectLoading = createSelector(
  selectProductState,
  (state: ProductState) => state.loading
);
