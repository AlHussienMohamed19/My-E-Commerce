import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoriesComponent } from './categories/categories.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard] , component: HomeComponent, title: 'Home' },
  { path: 'cart', canActivate: [AuthGuard] , component: CartComponent, title: 'Cart' },
  { path: 'products', canActivate: [AuthGuard] , component: ProductsComponent, title: 'Products' },
  { path: 'wishlist', canActivate: [AuthGuard] , component: WishlistComponent, title: 'Wishlist' },
  { path: 'allorders', canActivate: [AuthGuard] , component: AllOrdersComponent, title: 'All Orders' },
  { path: 'checkout/:id', canActivate: [AuthGuard] , component: CheckoutComponent, title: 'checkout' },
  { path: 'productDetails/:id', canActivate: [AuthGuard] , component: ProductDetailsComponent, title: 'ProductDetails' },
  { path: 'categoryDetails/:id', canActivate: [AuthGuard] , component: CategoryDetailsComponent, title: 'categoryDetails' },
  { path: 'brandDetails/:id', canActivate: [AuthGuard] , component: BrandDetailsComponent, title: 'brandDetails' },
  { path: 'brands', canActivate: [AuthGuard] , component: BrandsComponent, title: 'Brands' },
  { path: 'login', component: SigninComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'categories', canActivate: [AuthGuard] , component: CategoriesComponent, title: 'Categories' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
