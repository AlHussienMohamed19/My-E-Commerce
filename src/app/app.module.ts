import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainSliderComponent } from './main-slider/main-slider.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoriesSliderComponent } from './categories-slider/categories-slider.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ToastrModule } from 'ngx-toastr';
import { ProductTitlePipe } from './product-title.pipe';
import { SearchPipe } from './search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { SendTokenInterceptor } from './send-token.interceptor';
import { LoadingScreenInterceptor } from './loading-screen.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BrandsComponent,
    CartComponent,
    ProductsComponent,
    SigninComponent,
    RegisterComponent,
    NotFoundComponent,
    CategoriesComponent,
    MainSliderComponent,
    ProductDetailsComponent,
    CategoriesSliderComponent,
    WishlistComponent,
    ProductTitlePipe,
    SearchPipe,
    CheckoutComponent,
    AllOrdersComponent,
    LoadingScreenComponent,
    CategoryDetailsComponent,
    BrandDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
    }),
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SendTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingScreenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
