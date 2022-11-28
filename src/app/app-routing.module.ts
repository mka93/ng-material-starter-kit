import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {SelectCategoriesComponent} from './components/select-categories/select-categories.component';
import {CryptoChipsListComponent} from './components/crypto-chips-list/crypto-chips-list.component';
import {PublicHolidaysListComponent} from './components/public-holidays-list/public-holidays-list.component';
import {CheckboxCategoriesComponent} from './components/checkbox-categories/checkbox-categories.component';
import {CategoriesMenuComponent} from './components/categories-menu/categories-menu.component';
import {ProductTableComponent} from './components/product-table/product-table.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {EmployeeFormComponent} from './components/employee-form/employee-form.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {ExtendProductFormComponent} from './components/extend-product-form/extend-product-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {CatFactComponent} from './components/cat-fact/cat-fact.component';
import {AgifyComponent} from './components/agify/agify.component';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {SelectCategoriesComponentModule} from './components/select-categories/select-categories.component-module';
import {CategoriesServiceModule} from './services/categories.service-module';
import {CryptoChipsListComponentModule} from './components/crypto-chips-list/crypto-chips-list.component-module';
import {CryptoChipsServiceModule} from './services/crypto-chips.service-module';
import {
  PublicHolidaysListComponentModule
} from './components/public-holidays-list/public-holidays-list.component-module';
import {PublicHolidaysServiceModule} from './services/public-holidays.service-module';
import {CheckboxCategoriesComponentModule} from './components/checkbox-categories/checkbox-categories.component-module';
import {CategoriesMenuComponentModule} from './components/categories-menu/categories-menu.component-module';
import {ProductTableComponentModule} from './components/product-table/product-table.component-module';
import {ProductFormComponentModule} from './components/product-form/product-form.component-module';
import {EmployeeFormComponentModule} from './components/employee-form/employee-form.component-module';
import {EmployeesServiceModule} from './services/employees.service-module';
import {LoginFormComponentModule} from './components/login-form/login-form.component-module';
import {LoginServiceModule} from './services/login.service-module';
import {ExtendProductFormComponentModule} from './components/extend-product-form/extend-product-form.component-module';
import {RegisterFormComponentModule} from './components/register-form/register-form.component-module';
import {RegisterServiceModule} from './services/register.service-module';
import {ProductDetailsComponentModule} from './components/product-details/product-details.component-module';
import {CatFactComponentModule} from './components/cat-fact/cat-fact.component-module';
import {CatFactServiceModule} from './services/cat-fact.service-module';
import {AgifyComponentModule} from './components/agify/agify.component-module';
import {AgifyServiceModule} from './services/agify.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'products', component: ProductListComponent}, {
    path: 'categories',
    component: SelectCategoriesComponent
  }, {path: 'crypto', component: CryptoChipsListComponent}, {
    path: 'public-holidays',
    component: PublicHolidaysListComponent
  }, {path: 'checkbox-categories', component: CheckboxCategoriesComponent}, {
    path: 'categories-menu',
    component: CategoriesMenuComponent
  }, {path: 'product-table', component: ProductTableComponent}, {
    path: 'create-product',
    component: ProductFormComponent
  }, {path: 'create-employee', component: EmployeeFormComponent}, {
    path: 'login',
    component: LoginFormComponent
  }, {path: 'extend-create-product', component: ExtendProductFormComponent}, {
    path: 'register',
    component: RegisterFormComponent
  }, {path: 'product/:id', component: ProductDetailsComponent}, {
    path: 'cat-fact',
    component: CatFactComponent
  }, {
    path: 'age/:name',
    component: AgifyComponent
  }]), ProductListComponentModule, ProductsServiceModule, SelectCategoriesComponentModule, CategoriesServiceModule, CryptoChipsListComponentModule, CryptoChipsServiceModule, PublicHolidaysListComponentModule, PublicHolidaysServiceModule, CheckboxCategoriesComponentModule, CategoriesMenuComponentModule, ProductTableComponentModule, ProductFormComponentModule, EmployeeFormComponentModule, EmployeesServiceModule, LoginFormComponentModule, LoginServiceModule, ExtendProductFormComponentModule, RegisterFormComponentModule, RegisterServiceModule, ProductDetailsComponentModule, CatFactComponentModule, CatFactServiceModule, AgifyComponentModule, AgifyServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
