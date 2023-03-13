import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FomService } from '../fom.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  getApiData!: any;
  signinData!: any;
  matchFound!: any;

  @ViewChild('signinForm') formData!: NgForm;

  constructor(private formServ: FomService, private router: Router){ }

  onSubmit(){
    // console.log(this.formData.value);
    
    this.signinData = this.formData.value;
    this.formServ.signinCheck().subscribe((data)=>{
      this.getApiData = data;
      console.log(this.getApiData);

      this.matchFound = this.getApiData.filter((ele: any)=>{
        return (ele.uname == this.signinData.uname && ele.password == this.signinData.password)
      })

      console.log(this.matchFound);
      

      if(this.matchFound.length){
        console.log(`Welcome ${this.matchFound[0].fullname} You are successfully logged in`);
        this.router.navigateByUrl('/user/userSuccess')
        
      }else{
        console.log(`user not found`);
        
      }
      // if(this.getApiData){
        // this.getApiData.forEach((element:any) => {
        //   // console.log("foreach",element);
        //   if(element.uname == this.signinData.uname && element.password == this.signinData.password){
        //     // console.log('successfully Loggedin');
        //     alert(`Welcome ${element.fullname} You are successFully loggedin`);
        //     // "welcome "+element.fullname+" you are sucessfully loggedin"
            
            
        //   }
        // });
      // }
    })

    // this.formData.reset();    
  }


}
