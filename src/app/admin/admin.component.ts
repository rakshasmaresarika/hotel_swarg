import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FomService } from '../fom.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  getApiData!: any;
  signinData!: any;
  matchFound!: any;
  

  @ViewChild('signinForm') formData!: NgForm;

 constructor(private formServ: FomService,private router: Router,private toaster:ToastrService){ }

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
        // alert(`Welcome ${this.matchFound[0].fullname} You are successfully logged in`);
        this.toaster.success(`Welcome ${this.matchFound[0].fullname}`,`Login successfull`)
        this.router.navigateByUrl('/admin/adminSuccess')
        
      }else{
        // alert(`user not found`);
        this.toaster.error(`Check username and password you entered`,`User not found`)
        
      }



  //     // if(this.getApiData){
  //       this.getApiData.forEach((element:any) => {
  //         // console.log("foreach",element);
  //         if(element.uname == this.signinData.uname && element.password == this.signinData.password){
  //           // console.log('successfully Loggedin');
  //           alert(`Welcome ${element.fullname} You are successFully loggedin`);
  //           // "welcome "+element.fullname+" you are sucessfully loggedin"
            
            
  //         }
  //       });
  //     // }
   })

  //   this.formData.reset();    
   }

}

  
 
  

