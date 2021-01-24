import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart-component/cart-component.component';
import { CatalogueComponent } from './catalogue-component/catalogue-component.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';

const appRoutes: Routes = [
  { path: 'home', component: CatalogueComponent},
  { path: 'cart', component: CartComponent},
  { path: 'submit', component: SubmitFormComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 

}
