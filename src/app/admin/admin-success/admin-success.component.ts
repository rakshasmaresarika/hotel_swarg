import { Component } from '@angular/core';
import { FomService } from 'src/app/fom.service';

@Component({
  selector: 'app-admin-success',
  templateUrl: './admin-success.component.html',
  styleUrls: ['./admin-success.component.scss']
})
export class AdminSuccessComponent {
  hotelList:any
  constructor(private apiHotelList: FomService){ }
  _searchValue!:string ;
  apiHotelData:any
 ngOnInit(){
  this.apiHotelList.fetchHotelList().subscribe((list)=>{
    this.apiHotelData=list
    this.hotelList=this.apiHotelData
    console.log(this.apiHotelList);
    
  //  this._searchValue
  //  this._searchValue="kapil"

  })
  
 }
 //search filter by using get and set method..
   get searchValue(){
    return this._searchValue
   }

   set searchValue(value:string ){
     this._searchValue=value.toLowerCase()
     this.hotelList=this.searchHotels()
     
   }

    searchHotels(){
      this.hotelList=this.apiHotelData
      if(this.searchValue===""){
       return this.hotelList

      }
      else{
       return this.hotelList.filter((hotel:any)=>{
        return   JSON.stringify(hotel).toLowerCase().includes(this.searchValue)
        })
      }
    }

}
