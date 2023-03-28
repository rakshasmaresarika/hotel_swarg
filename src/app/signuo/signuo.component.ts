import { Component, OnInit,  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FomService } from '../fom.service';

@Component({
  selector: 'app-signuo',
  templateUrl: './signuo.component.html',
  styleUrls: ['./signuo.component.scss']
})
export class SignuoComponent  implements OnInit{
title= 'ReactiveForms';
reactiveForm!:FormGroup;
//  conformation notification 
hide:boolean= true;
 hidenoti = true;
  pass!: string;
  cPass!: string;
  notmatch:boolean=false;

constructor(private formServ:FomService){}

ngOnInit(){
  this.reactiveForm = new FormGroup({
    fullname: new FormControl(null, Validators.required),
    email: new FormControl(null,[Validators.required,Validators.email] ),
    mobile: new FormControl(null,Validators.required),
    uname: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required),
    cpassword:new FormControl(null,Validators.required),
    gender: new FormControl(null),
  });
}
onAddUser(){
 let user = this.reactiveForm.value;
 this.formServ.addUser(user).subscribe();
 this.hide= false;
}

onSubmit(){
  console.log(this.reactiveForm);
  this.reactiveForm.reset()
  confirm("Do You Want To Submit The Form")
  this.hide = true;

}

   notificationoff(){
    this.hidenoti= false;
    console.log(this.hidenoti);
    
   }
   //password conformation match func
   getPasswaord(event:any){
    // console.log(event.target.value);
    
    this.pass = event.target.value
    if( this.cPass ){    
      if(this.pass === this.cPass){ 
        console.log( "Password Match");
        this.notmatch=false;
      }
      else{
        console.log("Password Not Match");
        this.notmatch=true;
      }
    }
  }
   getCpasswaord(event:any){
    this.cPass= event.target.value;
    if(this.pass){
      if(this.pass === this.cPass){
        console.log( "Password Match");
        this.notmatch=false;
      }
      else{
        console.log("Password Not Match");
        this.notmatch=true;
      }

    }
   }



}
