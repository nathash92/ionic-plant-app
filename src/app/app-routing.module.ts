import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'auth', loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule) },
  { path: 'products', loadChildren: () => import('./feature/products/products.module').then(m => m.ProductsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
