import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SelectCategoriesComponent } from './components/select-categories/select-categories.component';
import { CryptoChipsListComponent } from './components/crypto-chips-list/crypto-chips-list.component';
import { PublicHolidaysListComponent } from './components/public-holidays-list/public-holidays-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { SelectCategoriesComponentModule } from './components/select-categories/select-categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsListComponentModule } from './components/crypto-chips-list/crypto-chips-list.component-module';
import { CryptoChipsServiceModule } from './services/crypto-chips.service-module';
import { PublicHolidaysListComponentModule } from './components/public-holidays-list/public-holidays-list.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: SelectCategoriesComponent }, { path: 'crypto', component: CryptoChipsListComponent }, { path: 'public-holidays', component: PublicHolidaysListComponent }]), ProductListComponentModule, ProductsServiceModule, SelectCategoriesComponentModule, CategoriesServiceModule, CryptoChipsListComponentModule, CryptoChipsServiceModule, PublicHolidaysListComponentModule, PublicHolidaysServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
