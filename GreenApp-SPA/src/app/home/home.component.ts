import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {business} from '../models/business.model'
import { GetBussinessById } from '../models/getBussinessById';
import { AlertifyService } from '../Services/alertify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
updatebusiness: any;
findData: string;
findPhoneNumber: string;
bussiness: any=null;

  constructor( private http: HttpClient , private alertify:AlertifyService) { }
 
// listofbussiness = [
//   {id:"1", name:"icha",PhoneNumber:"20"},
//   {id:"2", name:"denok",PhoneNumber:"23"},
//   {id:"3", name:"sri utami",PhoneNumber:"10"},
//   {id:"4", name:"mbok darmi",PhoneNumber:"40"},
//   {id:"5", name:"jeniffer",PhoneNumber:"30"},
//   {id:"6", name:"limbuk",PhoneNumber:"22"}];
  ngOnInit() {  
    this.getBussinesses();
   }
   getBussinesses(){
    this.http.get('http://localhost:5000/api/Bussiness/GetBussinesses').subscribe(response=>{
      this.updatebusiness = response as business[];
      // console.log('Response in JSOn Format :',response);
      this.alertify.message("search  any record from from search bar");
    }, error=>{
      this.alertify.error("oops failed to get data");
    });
  }
  
// onclick(p:any){
//   this.parameter = p;
// }
onSelect(item)
{
  console.log(item)
  
  this.http.get('http://localhost:5000/api/Bussiness/FindBussinessById/?id='+item).subscribe(response=>{
   
  console.log('getBusinessById',response);
  this.bussiness=response;
  console.log('getBusinessById',this.bussiness);

    // this.bussiness = response as GetBussinessById[];
    // console.log('Response in JSOn Format :', this.bussiness);

},
error=>{
  console.log("failed to bussiness");

});

}
}