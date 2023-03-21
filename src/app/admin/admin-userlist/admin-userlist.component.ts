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
  _searchUser!:string
  apiUserList!:any
ngOnInit(){
  this.fomsevice.getUserList().subscribe((userlist)=>{
    this.apiUserList=userlist
    this.usersList=this.apiUserList
  })
}
  get searchUser(){
    return this._searchUser
  }

  set searchUser(value:string){
    this._searchUser=value.toLowerCase()
    this.usersList=this.searchUsers()
  }

 searchUsers(){
  this.usersList=this.apiUserList
  if(this.searchUser===""){
    return this.usersList

   }
   else{
    return this.usersList.filter((user:any)=>{
     return   JSON.stringify(user).toLowerCase().includes(this.searchUser)
     })
   }
 }




}
