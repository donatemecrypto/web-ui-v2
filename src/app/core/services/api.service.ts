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

  get(endpoint:string, path: string, params: HttpParams = new HttpParams()): Observable<any> {
    this.logger.info("api-call", "GET",`${endpoint}${path}`, params);
    return this.http.get(`${endpoint}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(endpoint:string, path: string, body: Object = {}): Observable<any> {
    this.logger.info("api-call", "PUT",`${endpoint}${path}`, body);
    return this.http.put(
      `${endpoint}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(endpoint:string, path: string, body: Object = {}): Observable<any> {
    this.logger.info("api-call", "POST",`${endpoint}${path}`, body);
    return this.http.post(
      `${endpoint}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete(endpoint:string, path:any): Observable<any> {
    this.logger.info("api-call", "DELETE",`${endpoint}${path}`);
    return this.http.delete(
      `${endpoint}${path}`
    ).pipe(catchError(this.formatErrors));
  }

}