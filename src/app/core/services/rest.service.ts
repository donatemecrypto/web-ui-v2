import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppConfig } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  // Initialisation
  protected apiServer:any = AppConfig.settings.apiServer
  protected token_bearer:any = 'accessToken';
  protected crypto_data_endpoint:any;

  constructor(
      private http: HttpClient
  ) {
      this.crypto_data_endpoint = AppConfig.settings.apiServer.cryptodata;
  }

  getCryptoData() {
    const header = {
        headers: new HttpHeaders().set("Authorization", `Bearer ${this.token_bearer}`),
    };
    const url = "/data";
    return this.http.get(this.crypto_data_endpoint + url, header);
  }

}