import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FomService {
  hotelUrl: any ="http://localhost:3000/hotelList";

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
  }










