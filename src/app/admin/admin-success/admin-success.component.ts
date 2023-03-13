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

 ngOnInit(){
  this.apiHotelList.fetchHotelList().subscribe((list)=>{
    this.hotelList=list
    console.log(this.apiHotelList);
    
  })
 }

}
