import { Component } from '@angular/core';
import { FomService } from 'src/app/fom.service';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.scss']
})
export class OwnerSuccessComponent {
  hotelList:any;
  
  constructor(private apiHotelList: FomService){ }

  ngOnInit(){
   this.apiHotelList.fetchHotelList().subscribe((list)=>{
    this.hotelList=list
     console.log(this.apiHotelList);
     
   })
  }
 
}
