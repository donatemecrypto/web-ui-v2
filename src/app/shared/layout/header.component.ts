import { Component } from '@angular/core';

import { LogService } from '../../core/logger/log.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'udon-front-header';

  constructor(
    private logger: LogService
  ) {
  }

  ngOnInit() {
    this.logger.debug(this.title + " component started");
    this.logger.debug(this.title + " component finished");
  }
}