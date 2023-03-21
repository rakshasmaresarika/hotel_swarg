import { Component } from '@angular/core';
import { FomService } from 'src/app/fom.service';

@Component({
  selector: 'app-user-success',
  templateUrl: './user-success.component.html',
  styleUrls: ['./user-success.component.scss']
})
export class UserSuccessComponent {
   hotelList: any;
  constructor(private apiHotelList: FomService){ }
   _searchUserHotelList!:string
   apiUserHotelData:any
 ngOnInit(){
  this.apiHotelList.fetchHotelList().subscribe((list)=>{
    this.apiUserHotelData = list;
    this.hotelList=this.apiUserHotelData

    console.log(this.apiHotelList);
  })
 }
  get  searchUserHotelList(){
    return this. _searchUserHotelList
  }


  set  searchUserHotelList(value:string){
    this._searchUserHotelList=value.toLowerCase()
    this.hotelList=this.searchHotels()
  }

  searchHotels(){
    this.hotelList=this.apiUserHotelData
    if(this.searchUserHotelList===""){
     return this.hotelList

    }
    else{
     return this.hotelList.filter((hotel:any)=>{
      return   JSON.stringify(hotel).toLowerCase().includes(this.searchUserHotelList)
      })
    }
  }
  }

