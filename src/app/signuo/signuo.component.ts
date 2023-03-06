import { Component, OnInit,  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signuo',
  templateUrl: './signuo.component.html',
  styleUrls: ['./signuo.component.scss']
})
export class SignuoComponent  implements OnInit{
title= 'ReactiveForms';
reactiveForm:FormGroup

ngOnInit(){
  this.reactiveForm = new FormGroup({
    fullname: new FormControl(null, Validators.required),
    email: new FormControl(null,[Validators.required,Validators.email] ),
    mobile: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required),
    gender: new FormControl(null),
  });
}
onSubmit(){
  console.log(this.reactiveForm);
  this.reactiveForm.reset()
}
}
