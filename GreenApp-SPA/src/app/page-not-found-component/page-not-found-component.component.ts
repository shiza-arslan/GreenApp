import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './page-not-found-component.component.html',
  styleUrls: ['./page-not-found-component.component.css']
})
export class PageNotFoundComponentComponent implements OnInit {
// comments: any;
//   constructor( private http: HttpClient) { }
//   GetComment() {
//     this.http.get('http://jsonplaceholder.typicode.com/comments').subscribe
//     (response => {this.comments = response;
//     }, error => {console.log(error);
//     }
//     );
//   }

  ngOnInit() {
  }

}
