
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";


export class ErrorInterceptor implements HttpInterceptor{
    constructor() { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler) {
       return next.handle(req).pipe(
           catchError((error: HttpErrorResponse )=>
           {
               console.log(error);
               alert(error.error.message)
            return throwError(error) })
       )
    //    handle gives back response observable }stream
}
}