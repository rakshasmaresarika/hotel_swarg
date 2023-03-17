import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FomService } from 'src/app/fom.service';

@Component({
  selector: 'app-owner-new-hotel-rgistration',
  templateUrl: './owner-new-hotel-rgistration.component.html',
  styleUrls: ['./owner-new-hotel-rgistration.component.scss']
})
export class OwnerNewHotelRgistrationComponent {
  hotel!: any;
  edit = false;
  hotelDetailsForm!: FormGroup;
  hotelData:any;
  
  constructor(private dataServ: FomService, private formBuilder: FormBuilder){ }

  ngOnInit(){
  
  // setting form
    this.setHotelDetails()
    this.try1();
    this.edit=this.dataServ.edit
  }
  
  setHotelDetails(){
    this.hotelDetailsForm = this.formBuilder.group({
      hotelName: [""],
      rating: [""],
      price: [""],
      roomSiz: [""],
      roomDis: [""],
      address: [""],
      availability: [""],
      image: [""],
    })
    // console.log(this.hotel);

  }
  
  async try1(){
    
     
     
      //  this.edit = this.dataServ.editClicked;
      if(this.dataServ.edit){
        this.hotel = await this.dataServ.getHotelById().toPromise()
        console.log(this.hotel,"sarika");
        this.hotelDetailsForm.patchValue({
          hotelName: this.hotel.hotelName,
          rating: this.hotel.rating,
          price: this.hotel.price,
          roomSiz: this.hotel.roomSiz,
          roomDis: this.hotel.roomDis,
          address: this.hotel.address,
          availability: this.hotel.availability,
          image: this.hotel.image,
        })
      }else{
        console.log("edit falg not set");
      }
      
   
    
    
  }
  
  saveEdit(){
    this.dataServ.postNewHotel(this.hotelData).subscribe();
    console.log(this.hotelData);
     this.hotelDetailsForm.reset();
    
  }
  onSubmit(){
    this.hotelData=this.hotelDetailsForm.value
    console.log(this.hotelData);
    if(this.dataServ.edit){
      this.editHotelInfo()
    }
    else{
      this.saveEdit()
    }
  }
  
  editHotelInfo(){
   this.dataServ.patchHotel(this.hotelData).subscribe()
 }
 
  //  saveEdit(){
  //  this.dataServ.patchRequest(this.hotelDetailsForm.value).subscribe((editedHotel: any)=>{
  //     console.log(editedHotel);
  //     })
  //  }

  
    
  
}
