import { Component } from '@angular/core';
import { FomService } from 'src/app/fom.service';

@Component({
  selector: 'app-admin-userlist',
  templateUrl: './admin-userlist.component.html',
  styleUrls: ['./admin-userlist.component.scss']
})
export class AdminUserlistComponent {
  usersList!:any
  constructor(private fomsevice:FomService){}

ngOnInit(){
  this.fomsevice.getUserList().subscribe((userlist)=>{
    this.usersList=userlist
  })
}
  
}
