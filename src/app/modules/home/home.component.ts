import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppConfig } from '../../app.config';
import { LogService } from '../../core/logger/log.service';
import { ApiService } from '../../core/services';


@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./title.component.css']
})

export class HomeComponent implements OnInit {
  title = 'udon-front-home';
  
  protected cryptoDataUrl:any = AppConfig.settings.apiServer.cryptodata;
  public cryptoData:any;

  constructor(
    private logger: LogService,
    private apiservice: ApiService
  ) { 
  }

  ngOnInit() {
    this.logger.debug(this.title + " component started");

    // call getCryptoData function and leave it (it does not await for it)
    this.getCryptoData().then((message) => {
      // console.log(this.cryptoData[0]);
      // do something with getCryptoData() response
      // console.log("Success Message from getCryptoData(): "+message)
    }).catch((message) => {
      // display error message if failed
      // console.log("Failed Message from getCryptoData(): "+message)
    });

    this.logger.debug(this.title + " component finished");
  }

  async getCryptoData(){
    // it will wait for restservice.getCryptoData() to get response first 
     await new Promise((resolve, reject) => {
      let path: string;
      this.apiservice.get(this.cryptoDataUrl,path='/data')
        .subscribe((res: any) => {
          if (res) {
            this.cryptoData = res.content;
            resolve("success")
          } else {
            reject("failed");
          }
          this.logger.info("api-call","RESPONSE",`${this.cryptoDataUrl}${path}`,res);
        });
    });
  }
}