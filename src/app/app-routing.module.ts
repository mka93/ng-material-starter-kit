import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SelectCategoriesComponent } from './components/select-categories/select-categories.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { SelectCategoriesComponentModule } from './components/select-categories/select-categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: SelectCategoriesComponent }]), ProductListComponentModule, ProductsServiceModule, SelectCategoriesComponentModule, CategoriesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
