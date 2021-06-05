import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { QrCodeComponent } from './components/qrcode.component';
import { SharedModule } from '../../shared';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    QrCodeComponent
  ],
  providers: [
  ]
})
export class HomeModule {}
