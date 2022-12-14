import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (localStorage.getItem('token')) {
            let token = localStorage.getItem('token');
            const authReq = req.clone({
                setHeaders: {
                    Authorization: token || ''
                }
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    }
}