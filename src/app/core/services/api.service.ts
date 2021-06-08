import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LogService } from '../../core/logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  title = 'udon-front-api';

  constructor(
     private logger: LogService,
     private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.logger.debug(this.title + " component started");
    this.logger.debug(this.title + " component finished");
  }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(endpoint:string, path: string, params:any = undefined, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    let query = (params) ? "?" + new URLSearchParams(params).toString() : '';
    this.logger.info("api-call", "GET",`${endpoint}${path}`, query, headers);
    return this.http.get(`${endpoint}${path}` + query, { headers })
      .pipe(catchError(this.formatErrors));
  }

  put(endpoint:string, path: string, body: Object = {}): Observable<any> {
    this.logger.info("api-call", "PUT",`${endpoint}${path}`, body);
    return this.http.put(
      `${endpoint}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(endpoint:string, path: string, body: Object = {}, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    this.logger.info("api-call", "POST",`${endpoint}${path}`, body, headers);
    return this.http.post(
      `${endpoint}${path}`,
      JSON.stringify(body),
      { headers }
    ).pipe(catchError(this.formatErrors));
  }

  delete(endpoint:string, path:any): Observable<any> {
    this.logger.info("api-call", "DELETE",`${endpoint}${path}`);
    return this.http.delete(
      `${endpoint}${path}`
    ).pipe(catchError(this.formatErrors));
  }

}