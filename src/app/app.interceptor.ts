import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, switchMap, map, takeLast, mergeMap } from "rxjs/operators";

@Injectable()
export class AppInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem('token');
        if (token) {
            req = req.clone({
                setHeaders: {
                    'Authorization': 'Basic ' + token
                }
            })
        } else {
            if (req.body) {
                req = req.clone({
                    setHeaders: {
                        'Authorization': 'Basic ' + btoa(`${req.body['userName']}:${req.body['password']}`)
                    }
                })
            }
        }

        return next.handle(req)
            .pipe(
                switchMap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {

                        if (event.body.results) {
                            event = event.clone({ body: event.body.results });
                        }

                    }
                    return of(event);
                })
            )
    }

}