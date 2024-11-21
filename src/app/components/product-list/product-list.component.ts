import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {AppState, Product, ProductFilterParams, ProductPriceRange, ProductType} from '../../interfaces/interface';
import { addProduct, loadProducts } from '../../store/actions/product.actions';
import { selectProductData, selectSelectedProductData} from '../../store/selectors/product.selectors';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  selectedProducts$: Observable<Product[]> = of([]);
  products$: Observable<Product[]> = of([]);
  name: string = '';
  price: number = 0;
  priceRange: ProductPriceRange[] = [];
  selectedTypes: ProductType[] = [];
  readonly ProductType = ProductType;
  readonly ProductPriceRange = ProductPriceRange;
  private readonly limit: number = 10;
  private offset: number = 10;

  constructor(
    private store: Store<AppState>,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.selectedProducts$ = this.store.select(selectSelectedProductData);
    this.products$ = this.store.select(selectProductData);
    this.filterList();
  }

  onTypeChange(type: ProductType): void {
    if (this.selectedTypes.includes(type)) {
      this.selectedTypes = this.selectedTypes.filter(item => item !== type);
    } else {
      this.selectedTypes = [...this.selectedTypes, type];
    }

    this.filterList();
  }

  onPriceChange(range: ProductPriceRange) {
    if (this.priceRange.includes(range)) {
      this.priceRange = this.priceRange.filter(item => item !== range);
    } else {
      this.priceRange = [...this.priceRange, range];
    }

    this.filterList();
  }

  addToCart(product: Product): void {
    this.store.dispatch(addProduct({ product }));
    this.snackbar.open(`Product ${product.name} added`);
  }

  filterList(): void {
    this.offset = 10;
    this.store.dispatch(loadProducts({
      offset: this.offset,
      limit: this.limit,
      params: this.generateFilterParams()
    }));
  }

  load(): void {
    this.offset += this.limit;
    this.store.dispatch(loadProducts({offset: this.offset, limit: this.limit, params: this.generateFilterParams()}));
  }

  openDialog(product: Product): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: {
        product,
        addToCart: () => {
          this.addToCart(product);
          dialogRef.close();
        },
      }
    });
  }

  private generateFilterParams(): ProductFilterParams {
    return {
      name: this.name,
      type: this.selectedTypes,
      price: this.price,
      priceRange: this.priceRange
    }
  }
}
