
import { Component } from '@angular/core';
import { FomService } from 'src/app/fom.service';

@Component({
  selector: 'app-admin-ownerlist',
  templateUrl: './admin-ownerlist.component.html',
  styleUrls: ['./admin-ownerlist.component.scss']
})
export class AdminOwnerlistComponent {
  
 ownersList:any;

  constructor(private fomsevice:FomService){}

  ngOnInit(){
    this.fomsevice.getOwnerList().subscribe((ownerlist)=>{
      this.ownersList=ownerlist
    })
  }
  }
 
 

