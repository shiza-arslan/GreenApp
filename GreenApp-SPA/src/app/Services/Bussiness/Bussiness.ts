import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import{JwtHelperService} from '@auth0/angular-jwt';
@Injectable({ providedIn:"root"})
export class BussinessService {
   
    constructor(private http: HttpClient) { }
    endpoint = 'http://localhost:5000/api/Bussiness/';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      private extractData(res: Response) {
        const body = res;
         return body || { };
       }
       addBussiness(model: any):Observable<any> {
        return this.http.post<any>(this.endpoint + 'registerbussiness',model, this.httpOptions).pipe(
        );
       }
       getBussiness():Observable<any>{
         return this.http.get<any>(this.endpoint +'GetBussinesses').pipe(

         );
       }
}
  

