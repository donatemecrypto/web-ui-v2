import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Component
import { AppComponent } from './app.component';

// Services
import { AppConfig } from './app.config';
import { LogService } from './core/logger/log.service';
import { UserService } from './core/services/user'; // needed JwtService
import { JwtService } from './core/services/jwt.service';

/** 
 * Why ApiService not needed here ? because ApiService only consumed by home directly.
 * Whereas UserService is consumed by AppComponent, and UserService uses JwtService.
 * Thus we need to import both UserService & JwtService in this AppModule
 */

// Modules
import { SharedModule } from './shared';
import { HomeModule } from './modules/home/home.module';
import { AuthModule } from './modules/auth/auth.module';

import { AppRoutingModule } from './app-routing.module';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    AuthModule
  ],
  providers: [
    UserService,
    JwtService,
    LogService,
    AppConfig,
    { 
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
