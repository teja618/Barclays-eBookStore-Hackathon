import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LazyForDirective} from '../lazy-for.directive'
import { StorageServiceService } from '../storage-service.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-catalogue-component',
  templateUrl: './catalogue-component.component.html',
  styleUrls: ['./catalogue-component.component.scss']
})
export class CatalogueComponent implements OnInit {

  @Input('fromPage') sourcePage;
  loading: boolean = true;
  bookList:any[]=[];
  cartList:any[]=[];
  searchValue:string;
  imageList: any[]=[];
  tempList: any[]=[];
  cartTotal: number=0;
  constructor(private loadingController:LoadingController,private http:HttpClient,private storageService:StorageServiceService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.sourcePage);
    if(this.sourcePage=='Cart'){
      this.bookList=this.storageService.getCartList();
      this.cartList=this.storageService.getCartList();
      let s=0;
      this.cartList.map((obj)=>{
        s+=obj.price
      })
      this.cartTotal=s;
      this.storageService.setCartValue(this.cartTotal);
      this.loading=false;
    }else{
      this.getImageList();
      this.getBooks();
    }
 
    
  }

   getImageList() {
    this.http.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/bookimage816b123.json').subscribe((res:any)=>{
      this.imageList=res;
    })
  }

   getBooks() {
    this.http.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json').subscribe((res:any)=>{
      this.tempList=res;
      for(let i=0;i<100;i++){
        this.bookList[i]=this.tempList[i];
        this.bookList[i].url=this.getRandomImage().Image;
        this.bookList[i].cartCount=0;
      }
      this.tempList=[...this.bookList];
      this.storageService.setBookList(this.tempList);
     
    })
    this.loading=false;
  }

  getRandomImage(){
    let r = Math.floor(Math.random() * this.imageList.length) ;
    return this.imageList[r];
  }

  search(title:string){
    if(title.trim().length>0){
      //filter the list
      this.bookList=this.tempList.filter((x)=>{
        let ret=x.title;
        return (ret.indexOf(title)!=-1)
      })
    }else{
      //clear the filters
      this.bookList=this.tempList;
    }
  }

  addToCart(book:any){
    this.cartList.push(book);
    this.storageService.setCartList(this.cartList);
    console.log(this.cartList.length+"--");
    this.storageService.cartCount.next(this.cartList.length);
    book.cartCount+=1;
  }

  removeFromCart(book:any){
    if(this.sourcePage=='Cart'){
      console.log(this.cartTotal);
      this.bookList=this.bookList.filter((b)=>{
        return (b.bookID!=book.bookID)
      })
    }
    book.cartCount-=1;
    this.cartList = this.cartList.filter((b)=>{
      return (b.bookID!=book.bookID)
    })
    this.storageService.cartCount.next(this.cartList.length);
    this.storageService.setCartList(this.cartList);
    let s=0;
      this.cartList.map((obj)=>{
        s+=obj.price
      })
    this.cartTotal=s;
    this.storageService.setCartValue(s);
  }


  goToHome(){
    this.router.navigate(['home']);
  }

  Checkout(){
    this.router.navigate(['submit']);
  }
}
