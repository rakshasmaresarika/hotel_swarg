
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FomService } from 'src/app/fom.service';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.scss']
})
export class OwnerSuccessComponent {
  hotelList:any;

  constructor(private apiHotelList: FomService,private router :Router){ }

  ngOnInit(){
   this.apiHotelList.fetchHotelList().subscribe((list)=>{
    this.hotelList=list
     console.log(this.apiHotelList);
     
   })
  }

  onEdit(id:number){
     this.apiHotelList.editHotelId(id)
  }
  editFlag(){
    this.apiHotelList.edit=false;
    
  }
 async onDelete(id:number){
   if (confirm('Do You Want To Delete This Hotel ?')){
    console.log(id);
    this.apiHotelList.deleteHotelId(id).subscribe()
    // this.router.navigateByUrl('/owner/ownerSuccess')
  this.hotelList= await this.apiHotelList.fetchHotelList().toPromise()
    
   }

  }
}
