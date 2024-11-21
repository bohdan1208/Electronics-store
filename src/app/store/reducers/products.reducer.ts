import { createReducer, on } from '@ngrx/store';
import {ProductState} from '../../interfaces/interface';
import { addProduct, loadProducts, loadProductsFailure, loadProductsSuccess, removeProduct } from '../actions/product.actions';

export const initialState: ProductState = {
  products: [],
  selectedProducts: [],
  loading: false,
  error: null
};

export const productReducer = createReducer(
  initialState,
  on(loadProducts, state => ({
      ...state,
      loading: true
  })),
  on(loadProductsSuccess, (state, { products }) => ({
      ...state,
      products,
      loading: false
  })),
  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(addProduct, (state, { product }) => ({
    ...state,
    selectedProducts: [...state.selectedProducts, product],
  })),
  on(removeProduct, (state, { productId }) => ({
    ...state,
    selectedProducts: state.selectedProducts.filter(product => product.id !== productId),
  })),
);
