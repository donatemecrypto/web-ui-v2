import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LogService } from '../../core/logger/log.service';

//temporary
import { UserService } from '../../core/services/user';
import { UserModel } from '../../models/user.model';



@Component({
  selector: 'app-navigation-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
  
})
export class TopNavComponent {
  title = 'udon-front-topnav';

  constructor(
    private router: Router,
    private logger: LogService,
    private userService: UserService
  ) {
  }

  currentUser!: UserModel;

  ngOnInit() {
    this.logger.debug(this.title + " component started");

    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );

    this.logger.debug(this.title + " component finished");
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }
}