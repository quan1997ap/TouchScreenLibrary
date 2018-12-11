import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { includes } from 'lodash';
@Injectable({providedIn: 'root'})
export class HeaderInterceptor implements HttpInterceptor {
  excludeUpdateUrls: string[] = [];
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = this.addHeaders(req);
    return next.handle(headers);
  }

  /**
   * update headers
   * @param req
   */
  addHeaders(req: HttpRequest<any>): HttpRequest<any> {
    const headers = {
        'Accept': 'application/json',
        'Client_Id': environment.clientId,
    };

    let requestUrl = req.url;
    if (req.url.indexOf('.json') < 0) {
        requestUrl = this.updateUrl(req.url);
    }
    // encrytp body
    const requestBody = req.body;
    const reqHeaders = new HttpHeaders(headers);
    return req.clone({ headers: reqHeaders, withCredentials: true, url: requestUrl, body: requestBody});
  }

  // update url with environment
  private updateUrl(req: string) {
    if (includes(this.excludeUpdateUrls, req )) {
        return req;
    } else {
        return environment.apiUrl + req;
    }
  }
}
