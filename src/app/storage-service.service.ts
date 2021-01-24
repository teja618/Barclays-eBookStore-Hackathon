import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  private cartList:any[]=[];
  cartValue:number=0;
  private bookList:any[]=[];
  cartCount:BehaviorSubject<number>=new BehaviorSubject<number>(0);

  constructor() { }

  setCartValue(val:any){
    this.cartValue=val;
  }

  getCartValue(){
    return this.cartValue;
  }

  setBookList(bookList:any){
    this.bookList=bookList;
  }

  getBookList(){
    return this.bookList;

  }

  getCartList(){
    return this.cartList
  }

  setCartList(cartList:any){
    this.cartList=cartList;
  }
}
