import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { CompanyService} from '../Services/CompanyService/Company.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertifyService } from '../Services/alertify.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
model: any={};
  constructor(public companyService: CompanyService , private alertify:AlertifyService ,private router:Router) { }

  ngOnInit() {
    // this.doGET();
  }
  save() { this.companyService.addCompany(this.model).subscribe(response =>{

    console.log("register successfully");

  },  error=>{
    console.log("failed to register");
  }, ()=>{this.router.navigate(['/AddBussiness']);
}
  
  );
  }
//   doGET() {
//     this.GET().subscribe(
//       data => {
//         console.log(data);
//       }, (error) => {
//       }
//     );
//   }
// public GET(): Observable<any> {
//     return this.requestAllowAnonymousGET('http://jsonplaceholder.typicode.com/comments');

//   }
//   public requestAllowAnonymousGET(link) {
//     return this.http.get(link);
//   }
}

