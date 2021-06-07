import { Component } from '@angular/core';

import { LogService } from '../../core/logger/log.service';

@Component({
  selector: 'app-navigation-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
  
})
export class TopNavComponent {
  title = 'udon-front-topnav';

  constructor(
    private logger: LogService
  ) {
  }

  ngOnInit() {
    this.logger.debug(this.title + " component started");
    this.logger.debug(this.title + " component finished");
  }
}