import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { StorageServiceService } from '../storage-service.service';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {

  submitForm:FormGroup;
  constructor(private loadingController:LoadingController,private router:Router,private formBuilder: FormBuilder,private http:HttpClient,private storageService:StorageServiceService) { }


  ngOnInit(): void {
    let val:number=this.storageService.getCartValue();
    if(val==0){
      this.router.navigate(['home']);
    }
    this.submitForm =this.formBuilder.group({
      full_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      phone_number: new FormControl('',  [Validators.required,Validators.minLength(10)]),
      description: new FormControl('', [Validators.required]),
      amount:new FormControl(val,[Validators.required]),
    });
  }

  getFormControl(control:any){
    return this.submitForm.get(control);
  }

  goBack(){
    this.router.navigate(['cart']);
  }

   proceed(){
 
    if(this.submitForm.invalid){
      Object.keys(this.submitForm.controls).forEach(key => {
        this.submitForm.get(key).markAsTouched();
      });
      return;
    }
    
    

    if(this.submitForm.valid){
     
      let req={
          "amount": (Number)(this.submitForm.get('amount').value),
          "description": this.submitForm.get('description').value,
          "email": this.submitForm.get('email').value,
          "name": this.submitForm.get('full_name').value,
          "phone": this.submitForm.get('phone_number').value
        }
      
      this.http.post('https://barclays-hackathon.herokuapp.com/payment/v1',req).subscribe((response:any)=>{
        if(response!=null){
          let paymentURL=response.paymentOptions.paymentUrl;
          
          window.location.href = paymentURL;
        }
      },error => console.log('oops', error));
    }
  }

  }



  /*
{
    "paymentOrder": {
        "id": "e90f871a3634477fa2808d202d3d5166",
        "transactionId": "48444f8a-b202-46e0-b380-a97c3bd22a32",
        "status": "pending",
        "currency": "INR",
        "amount": 10.0,
        "name": "TejaTest",
        "email": "teja618@gmail.com",
        "phone": "+918072807157",
        "description": "buying books",
        "webhookUrl": null,
        "redirectUrl": "http://www.google.com",
        "createdAt": "2021-01-23T17:55:59.476567Z",
        "resourceUri": "https://test.instamojo.com/v2/gateway/orders/id:e90f871a3634477fa2808d202d3d5166/",
        "payments": null
    },
    "paymentOptions": {
        "paymentUrl": "https://test.instamojo.com/@teja618/e90f871a3634477fa2808d202d3d5166?embed=form"
    }
  */