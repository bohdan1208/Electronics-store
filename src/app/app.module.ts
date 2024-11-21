import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import { Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { productReducer} from './store/reducers/products.reducer';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductDialogComponent} from './components/product-dialog/product-dialog.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {ProductEffects} from './store/effects/product.effects';
import {MatDialogConfig, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProductCartComponent} from './components/product-cart/product-cart.component';
import {MatTableModule} from '@angular/material/table';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {AppState} from './interfaces/interface';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'cart',
    component: ProductCartComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot<AppState>({ productState: productReducer }),
    EffectsModule.forRoot(ProductEffects),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatCheckboxModule
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDialogComponent,
    ProductCartComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: true,
        disableClose: false,
        autoFocus: true,
        position: { top: '10vh' },
        width: '500px',
      } as MatDialogConfig,
    },
  ]
})
export class AppModule {}
