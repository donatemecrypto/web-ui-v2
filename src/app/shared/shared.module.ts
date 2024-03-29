import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Component need to be shared in module if it used by other than app.component
import { ListErrorsComponent } from './modal/list-errors.component';
import { HeaderComponent, FooterComponent } from './layout';
import { TopNavComponent, SideNavComponent } from './navigation';
import { ShowAuthedDirective } from './directive/show-authed.directive';


@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [
      FooterComponent,
      HeaderComponent,
      TopNavComponent,
      SideNavComponent,
      ListErrorsComponent,
      ShowAuthedDirective
    ],
    exports: [
      CommonModule,
      RouterModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      FooterComponent,
      HeaderComponent,
      TopNavComponent,
      SideNavComponent,
      ListErrorsComponent,
      ShowAuthedDirective
    ]
  })
  export class SharedModule {}
  
