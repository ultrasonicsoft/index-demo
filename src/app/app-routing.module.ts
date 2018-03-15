import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountOverviewComponent } from './dashboard/account/account-overview/account-overview.component';
import { AccountSecurityComponent } from './dashboard/account/account-security/account-security.component';
import { CartOverviewComponent } from './dashboard/cart/cart-overview/cart-overview.component';
import { CartItemDetailsComponent } from './dashboard/cart/cart-item-details/cart-item-details.component';
import { CartComponent } from './dashboard/cart/cart/cart.component';
import { ProductComponent } from './dashboard/products/product/product.component';
import { ProductsDetailsComponent } from './dashboard/products/products-details/products-details.component';
import { ProductsOverviewComponent } from './dashboard/products/products-overview/products-overview.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AccountModule } from './dashboard/account/account.module';
import { CartModule } from './dashboard/cart/cart.module';
import { LoginModule } from './login/login.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { ProductsModule } from './dashboard/products/products.module';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'account-overview', component: AccountOverviewComponent
      },
      {
        path: 'account-security', component: AccountSecurityComponent
      },
      {
        path: 'products', component: ProductComponent,
        children: [
          {
            path: 'product-details', component: ProductsDetailsComponent
          },
          {
            path: 'product-overview', component: ProductsOverviewComponent
          }
        ]
      }
    ]
  },  
  {
    path: 'cart',
    component: CartComponent,
    children: [
      {
        path: 'cart-overview', component: CartOverviewComponent
      },
      {
        path: 'cart-item-details', component: CartItemDetailsComponent
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [
    DashboardModule,
    AccountModule,
    CartModule,
    LoginModule,
    SignUpModule,
    ProductsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
