import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent} from './catalogue-component/catalogue-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent} from './cart-component/cart-component.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { LazyForDirective } from './lazy-for.directive';
import { StorageServiceService } from './storage-service.service';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    CartComponent,
    LazyForDirective,
    SubmitFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ScrollingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    IonicModule
  ],
  providers: [StorageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
