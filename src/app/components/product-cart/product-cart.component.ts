import { Component, OnDestroy, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Subject, takeUntil} from 'rxjs';
import {Product, AppState} from '../../interfaces/interface';
import {removeProduct} from '../../store/actions/product.actions';
import {selectSelectedProductData} from '../../store/selectors/product.selectors';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['image', 'name', 'price', 'rate', 'remove'];
  dataSource: Product[] = [];
  private destroySubj$ = new Subject();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectSelectedProductData)
      .pipe(takeUntil(this.destroySubj$))
      .subscribe((data: Product[]) => this.dataSource = data);
  }

  ngOnDestroy(): void {
    this.destroySubj$.next(null);
    this.destroySubj$.complete();
  }

  removeItem(item: Product): void {
    this.store.dispatch(removeProduct({productId: item.id}));
  }
}
