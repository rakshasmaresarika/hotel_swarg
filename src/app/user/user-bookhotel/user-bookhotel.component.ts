import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-bookhotel',
  templateUrl: './user-bookhotel.component.html',
  styleUrls: ['./user-bookhotel.component.scss']
})
export class UserBookhotelComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  bookingForm!: FormGroup;

  constructor(private formbuild: FormBuilder,private toastr: ToastrService, private router: Router){ }

  ngOnInit(){
    this.settingBookingForm();
  }
  ngAfterViewInit(){
    // this.settingBookingForm();
  }

  settingBookingForm(){
    this.bookingForm = this.formbuild.group({
      fname: ["",Validators.required],
      lname: ["",Validators.required],
      email: ["",Validators.required],
      mobile: ["",Validators.required],
      arrivalDate: ["",Validators.required],
      departureDate: ["",Validators.required],
      guests: [1,Validators.required],
      address: ["",Validators.required],
      city: ["",Validators.required],
      state: ["",Validators.required],
      pin: ["",Validators.required],
      paymentMethod: ["upi"]
    })
  }

  onSubmit(){
    console.log(this.bookingForm.value);
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.bookingForm.value, null, 4));
    console.log
    ('SUCCESS!! :-)\n\n' + JSON.stringify(this.bookingForm.value, null, 4));
    this.toastr.success('Hotel Book successfully')
    // this.bookingForm.reset();
    this.router.navigateByUrl('/user/userSuccess')
   }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // form: FormGroup = new FormGroup({});

  // constructor(private fb: FormBuilder) { }

  // ngOnInit(): void {
  //   this.form = this.fb.group({
  //     name: [null, [Validators.required, Validators.minLength(10)]],
  //     email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
  //     dob: [null, [Validators.required]],
  //     address: [null],
  //     country: [null],
  //     gender: [null]
  //   });
  // }

  // saveDetails(form: any) {
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  // }
}

