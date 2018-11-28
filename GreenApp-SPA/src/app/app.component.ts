import { Component, OnInit } from '@angular/core';
import { CompanyService } from './Services/CompanyService/Company.service';
import{JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

jwtHelper=new JwtHelperService();
  constructor ( private companyservice:CompanyService ){}
  ngOnInit(){
    const token=localStorage.getItem('token');
    if(token){
      this.companyservice.decodedToken=this.jwtHelper.decodeToken(token);
    }

  }
}
