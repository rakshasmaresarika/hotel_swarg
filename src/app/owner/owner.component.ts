import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { FomService } from '../fom.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent {
  signinData!: any;
  getApiData!: any;
  matchFound!:any;
  

  @ViewChild('signinForm') formData!: NgForm;
  

  constructor(private formServ: FomService ,private router: Router,private toaster:ToastrService){ }
  
  async onSubmit(){
    console.log(this.formData.value);
    
    this.signinData = this.formData.value;
    this.getApiData = await this.formServ.signinCheck().toPromise()
    console.log(this.getApiData);
    
    this.matchFound = this.getApiData.filter((ele: any)=>{
      return (ele.uname == this.signinData.uname && ele.password == this.signinData.password)
    })

    console.log(this.matchFound);
    

    if(this.matchFound.length){
      // alert(`Welcome ${this.matchFound[0].fullname} You are successfully logged in`);
      this.toaster.success(`Welcome ${this.matchFound[0].fullname}`,`Login Successfully`)
      this.router.navigateByUrl('/owner/ownerSuccess')
      
    }else{
      // alert(`user not found`);
      this.toaster.error(`Check username and password you entered`,`User not found`)
      
    }
      // console.log(data);
      // this.getApiData = data;
      // console.log(this.getApiData);
      // if(this.getApiData){
        // this.getApiData.forEach((element:any) => {
        //   console.log("foreach",element);
        //   if(element.uname == this.signinData.uname && element.password == this.signinData.password){
        // //     // console.log('successfully Loggedin');
        //     alert(`Welcome ${element.fullname} You are successFully loggedin`);
        //     // "welcome "+element.fullname+" you are sucessfully loggedin"
            
            
         // }
       // });
      // }
     }

    // this.formData.reset();    
  }

