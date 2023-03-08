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


}
