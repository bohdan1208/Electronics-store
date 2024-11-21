import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Product} from '../../interfaces/interface';

interface ProductDialogData {
  product: Product;
  addToCart: () => void;
}

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDialogComponent {
  readonly displayedColumns: string[] = ['reviewer', 'comment', 'rate'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductDialogData) {}
}
