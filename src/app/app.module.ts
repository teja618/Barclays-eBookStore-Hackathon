import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent} from './catalogue-component/catalogue-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent} from './cart-component/cart-component.component';
import {HttpClientModule} from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { LazyForDirective } from './lazy-for.directive';
import { StorageServiceService } from './storage-service.service';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    CartComponent,
    LazyForDirective,
    SubmitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ScrollingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StorageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
