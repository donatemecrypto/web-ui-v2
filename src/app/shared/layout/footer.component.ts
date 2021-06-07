import { Component } from '@angular/core';

import { LogService } from '../../core/logger/log.service';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  title = 'cryto-front-footer';

  today: number = Date.now();

  constructor(
    private logger: LogService
  ) {
  }

  ngOnInit() {
    this.logger.debug(this.title + " component started");
    this.logger.debug(this.title + " component finished");
  }
}
