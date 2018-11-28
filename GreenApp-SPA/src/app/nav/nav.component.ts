import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../Services/alertify.service';
import { CompanyService} from '../Services/CompanyService/Company.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public companyService: CompanyService, private router:Router,private alertify:AlertifyService) { }
 
  logOut() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/Home']);
  }
  loggedIn() {
    return this.companyService.loggedIn();
  }
  ngOnInit() {
  }

}
