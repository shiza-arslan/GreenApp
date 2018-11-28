import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CompanyService} from '../Services/CompanyService/Company.service';
import { error } from 'util';
import { AlertifyService } from '../Services/alertify.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 model:any={};

  constructor(private companyService: CompanyService, private router:Router,private alertify:AlertifyService) {}
  login(){
    this.companyService.login(this.model).subscribe(response=>{
      this.alertify.success("login Successfull");
    },
    error=>{
      this.alertify.error("login failed");
    }, ()=>{this.router.navigate(['/AddBussiness']);
  });
    }
    loggedIn() {
   return this.companyService.loggedIn();
  }


  ngOnInit() {}



}
