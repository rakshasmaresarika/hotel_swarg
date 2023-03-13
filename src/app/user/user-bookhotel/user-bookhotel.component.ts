import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-bookhotel',
  templateUrl: './user-bookhotel.component.html',
  styleUrls: ['./user-bookhotel.component.scss']
})
export class UserBookhotelComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  bookingForm!: FormGroup;

  constructor(private formbuild: FormBuilder){ }

  ngOnInit(){
    this.settingBookingForm();
  }
  ngAfterViewInit(){
    // this.settingBookingForm();
  }

  settingBookingForm(){
    this.bookingForm = this.formbuild.group({
      fname: [""],
      lname: [""],
      email: [""],
      mobile: [""],
      arrivalDate: [""],
      departureDate: [""],
      guests: [],
      address: [""],
      city: [""],
      state: [""],
      pin: [""],
      paymentMethod: ["upi"]
    })
  }

  onSubmit(){
    console.log(this.bookingForm.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.bookingForm.value, null, 4));
   }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
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

