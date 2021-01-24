import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {StorageServiceService} from './storage-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Barclays-Hack';
  cartCount:number=0;

  classStatesActive='nav-item active'
  classHomeActive="nav-item active"

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private http:HttpClient,private storageService:StorageServiceService){
    this.storageService.cartCount.subscribe((val)=>{
      this.cartCount=val;
    })
  }

}


