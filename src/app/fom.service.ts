import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FomService {
  editUrl!:string
  edit=false;
  deleteUrl!:string
  delete=false;
  

  getHotel() {
    return this.http.get(this.hotelUrl)
  }
  postNewHotel(newHotel:any){
    return this.http.post(this.hotelUrl,newHotel)
  }
  hotelUrl: any ="http://localhost:3000/hotelList/";
  editClicked: any;

  constructor(private http:HttpClient) { }
  endPoint!:string;
  userUrl!: string;
  // userUrl="http://localhost:3000/users";
  // adminUrl="http://localhost:3000/admin";
  // ownerUrl=" http://localhost:3000/owner";

  onJourney(endPoint:string){
    this.endPoint = endPoint;
    console.log(this.endPoint);
    this.userUrl =  `http://localhost:3000/${this.endPoint}`
    console.log(this.userUrl);
  }
  
  addUser(body:any){
   return  this.http.post(this.userUrl, body);
  }

  signinCheck(){
    // console.log(this.userUrl);
    return this.http.get(this.userUrl)    
  }

  fetchHotelList(){
    return this.http.get(this.hotelUrl)
      
      // subscribe(()=>{})
    }

    editHotelId(id:number){
   this.editUrl=`${this.hotelUrl}${id}`
    console.log(this.editUrl);
    this.edit=true;
   } 
   patchHotel(body:any){
    console.log(this.editUrl);
    
    return this.http.patch(this.editUrl,body)

   }
   getHotelById(){
     return this.http.get(this.editUrl)
   }

   deleteHotelId(id:number){
    this.deleteUrl=`${this.hotelUrl}${id}`
     console.log(this.deleteUrl);
      return this.http.delete(this.deleteUrl)
    } 
   
     getUserList(){
     
        return  this.http.get("http://localhost:3000/users");
       }
     
     getOwnerList(){
     
      return  this.http.get("http://localhost:3000/owners");
     }
   }

  










