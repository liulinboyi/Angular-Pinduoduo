import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  // 中断
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedReq = req.clone({
      setParams: {
        token: 'test'
      }
    });
    return next.handle(modifiedReq);
  }
}
