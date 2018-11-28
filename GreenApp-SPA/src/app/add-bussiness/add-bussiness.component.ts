import { Component, OnInit } from '@angular/core';

// import { from } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { BussinessService } from '../Services/Bussiness/Bussiness';
import { AlertifyService } from '../Services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bussiness',
  templateUrl: './add-bussiness.component.html',
  styleUrls: ['./add-bussiness.component.css']
})
export class AddBussinessComponent implements OnInit {
model:any={};
AddBussines(){
this.bussinessService.addBussiness(this.model).subscribe(response =>{

  this.alertify.success("register successfully");
  this.router.navigate(['/Home']);

},  error=>{
  this.alertify.error("login failed");
}, ()=>{this.router.navigate(['/AddBussiness']);
});
}


  constructor(private bussinessService:BussinessService, private alertify:AlertifyService ,private router:Router ) {

   }
   onSubmit() {
   
  }

  ngOnInit() {
  }

}
