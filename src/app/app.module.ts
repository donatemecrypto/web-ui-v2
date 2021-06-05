import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { AppConfig } from './app.config';


import {
  FooterComponent,
  HeaderComponent,
  SideNavComponent,
  TopNavComponent,
  SharedModule,
} from './shared';
import { AppRoutingModule } from './app-routing.module';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent, 
    FooterComponent, 
    HeaderComponent, 
    SideNavComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [
    AppConfig,
       { provide: APP_INITIALIZER,
         useFactory: initializeApp,
         deps: [AppConfig], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
