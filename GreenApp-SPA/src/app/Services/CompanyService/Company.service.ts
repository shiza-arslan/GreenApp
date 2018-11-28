import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import{JwtHelperService} from '@auth0/angular-jwt';


@Injectable( {
  providedIn:"root"
})
export class CompanyService {
 constructor(private http: HttpClient) { }
  endpoint = 'http://localhost:5000/api/Auth/';
  jwtHelper=new JwtHelperService();
  decodedToken:any;
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
 private extractData(res: Response) {
 const body = res;
  return body || { };
}
 addCompany(model: any):Observable<any> {
  return this.http.post<any>(this.endpoint + 'register',model, this.httpOptions).pipe(
  );
 }

login(model:any){
return this.http.post(this.endpoint+'login',model).pipe(map((response :any)=>{
  const user=response;
  if(user)
  {
    localStorage.setItem('token', user.token);
    this.decodedToken=this.jwtHelper.decodeToken(user.token);
    console.log(this.decodedToken);
    
  }
}))
}
loggedIn(){
const token=localStorage.getItem('token');
return !this.jwtHelper.isTokenExpired(token);
}
AdminLogin(model:any): Observable<any>{
return this.http.post<any>('http://localhost:5000/api/Admin/AdminLogin',model,this.httpOptions).pipe()
}
}


// const httpParams = new HttpParams()
// .append('name', name )
// .append('city', city )
// .append('address', address )
// .append('email', email )
// .append('password', password );
// console.log(company);
