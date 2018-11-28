import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../Services/alertify.service';
import { CompanyService } from '../Services/CompanyService/Company.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
model:any={};

  constructor(private companyService:CompanyService , private alertify:AlertifyService,private router:Router) { }
AdminLogin() { 
    this.companyService.AdminLogin(this.model).subscribe(response=>{
      this.alertify.success("logged in successfully");
      this.router.navigate(['/Message']);
      
    },
    error=>{
      this.alertify.error("failed to logged in ");
    }
      
    );
  }

  ngOnInit() { 
  }

}
