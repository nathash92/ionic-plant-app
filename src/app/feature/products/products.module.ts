import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { DetailComponent } from './pages/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { OrderTrackComponent } from './pages/order-track/order-track.component';


@NgModule({
  declarations: [
    DetailComponent,
    CartComponent,
    LandingComponent,
    ThankyouComponent,
    OrderTrackComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
