import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
        return next.handle(req).pipe(
            catchError(error=>{
                if(error instanceof HttpResponse){
                    if(error.status===401)
                    {
                        return throwError(error.statusText);
                    }
                    const applicationError=error.headers.get('application-Error');
                    if(applicationError)
                    { console.error(applicationError);
                        return throwError(applicationError);
                    }
                    const serverError= error.error;
                    let modelStateError='';
                    if(serverError && typeof serverError=== 'object'){
                        for(const key in serverError)
                        {
                            if(serverError[key])
                            {
                                modelStateError+= serverError[key] +'/n';
                            }
                        }
                    }
                    return throwError(modelStateError|| serverError|| 'server error')

                }
            })
        );
    }
}
                export const ErrorIncepterProvider={
                   provide:HTTP_INTERCEPTORS,
                  useClass:ErrorInterceptor,
                  multi:true

}

