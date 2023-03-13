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

 ngOnInit(){
  this.apiHotelList.fetchHotelList().subscribe((list)=>{
    this.hotelList = list;
    console.log(this.apiHotelList);
  })
 }
 
}
