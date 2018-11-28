import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{ AlertifyService} from '../Services/alertify.service'
import{business } from '../models/business.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
listOfPhoneNumber:any=[];
listOfBussiness:any;
_message:string;
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
// bussiness = {
//   name : "",
//   phonenumber : ""
// }
  constructor( private route:Router,private http:HttpClient, private alertify:AlertifyService) { }
  getBussinesses(){
    this.http.get('http://localhost:5000/api/Bussiness/GetBussinesses').subscribe(response=>{
      this.listOfBussiness = response as business[];
      console.log('Response in JSOn Format :',response);
    }, error=>{
      this.alertify.error("oops failed to get data");
    });
  }

  ngOnInit() {
    this.getBussinesses();
  }

  sendPromotionMessage(business : any){

    this.listOfPhoneNumber.push(business);
    // console.log('Array After Push : ',this.listOfPhoneNumber);
  }
  sendMessageAndPhoneNumbers(){
    console.log(this.listOfPhoneNumber,this._message)
    return this.http.post<any>('http://localhost:5000/api/Message/SendMessage/?number=/'+this.listOfPhoneNumber+'/?Message='+this._message, this.httpOptions).pipe(
   
    );
    

    // Object.assign(this.tempObj ,this.listOfPhoneNumber);   
    //  console.log('Temp Obj',this.tempObj);
    // Object.assign(this.tempObj ,this._message);   

  }

}
