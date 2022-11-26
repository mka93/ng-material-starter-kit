import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SelectCategoriesComponent } from './components/select-categories/select-categories.component';
import { CryptoChipsListComponent } from './components/crypto-chips-list/crypto-chips-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { SelectCategoriesComponentModule } from './components/select-categories/select-categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsListComponentModule } from './components/crypto-chips-list/crypto-chips-list.component-module';
import { CryptoChipsServiceModule } from './services/crypto-chips.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: SelectCategoriesComponent }, { path: 'crypto', component: CryptoChipsListComponent }]), ProductListComponentModule, ProductsServiceModule, SelectCategoriesComponentModule, CategoriesServiceModule, CryptoChipsListComponentModule, CryptoChipsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
