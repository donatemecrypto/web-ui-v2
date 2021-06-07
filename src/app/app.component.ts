import { Component, OnInit } from '@angular/core';
import { LogService } from './core/logger/log.service';

import { UserService } from './core/services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'cryto-front-app';

  constructor(
    private logger: LogService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.logger.debug(this.title + " component started");

    this.userService.populate();

    this.logger.debug(this.title + " component finished");
  }
}
