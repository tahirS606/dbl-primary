import { ErrorComponent } from './src/app/components/auth/error/error.component';

import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    constructor(private dialog: MatDialog) { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler) {
       return next.handle(req).pipe(
           catchError((error: HttpErrorResponse )=>
           {
               let errorMessage = "an Unknown Message Occurred";
               if (error.error.message){
                errorMessage = error.error.message
               }
               this.dialog.open(ErrorComponent, {data:{ message: errorMessage}})
               console.log(error);
            //    alert(error.error.message)
            return throwError(error) })
       )
    //    handle gives back response observable }stream
}
}