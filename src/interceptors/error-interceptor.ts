import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
//        console.log("passou");
        return next.handle(req)
        .catch((error, caught) => {

            let errorObj = error;
            if (errorObj.error) {
                errorObj = errorObj.error;
            }

            if (!error.status) { // não está no formato JSON
                errorObj = JSON.parse(errorObj);
            }

            console.log("Erro detectado pelo interceptor");
            console.log(errorObj);
            
            return Observable.throw(errorObj);
        }) as any;
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};