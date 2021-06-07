import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { map ,  distinctUntilChanged } from 'rxjs/operators';

import { ApiService } from '../api.service';
import { JwtService } from '../jwt.service';
import { UserModel } from '../../../models/user.model';
import { AppConfig } from '../../../app.config';
import { LogService } from '../../../core/logger/log.service';


@Injectable()
export class UserService {
  title = 'cryto-front-user-service';

  private currentUserSubject = new BehaviorSubject<UserModel>({} as UserModel);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  protected jwtUrl:any = AppConfig.settings.apiServer.jwt;

  constructor (
    private logger: LogService,
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService
  ) {
  }

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.get(this.jwtUrl,'/user')
      .subscribe(
        data => this.setAuth(data.user),
        err => this.purgeAuth()
      );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: UserModel) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as UserModel);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type: any, credentials: any): Observable<UserModel> {
    const route = (type === 'login') ? '/login' : '/register';
    const header:any = { 
      'Content-Type': 'application/json'
    }
    return this.apiService.post(this.jwtUrl, '/auth' + route, credentials, header)
      .pipe(map(
      data => {
        this.setAuth(data.user);
        return data;
      }
    ));
  }

  getCurrentUser(): UserModel {
    return this.currentUserSubject.value;
  }

  // Update the user on the server (email, pass, etc)
  update(user:any): Observable<UserModel> {
    return this.apiService
    .put(this.jwtUrl, '/user', { user })
    .pipe(map(data => {
      // Update the currentUser observable
      this.currentUserSubject.next(data.user);
      return data.user;
    }));
  }

}
