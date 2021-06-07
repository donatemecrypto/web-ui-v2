import { Component } from '@angular/core';
import { LogService } from './core/logger/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'cryto-front-app';

  constructor(
    private logger: LogService
  ) {
  }

  ngOnInit() {
    this.logger.debug(this.title + " component started");
    this.logger.debug(this.title + " component finished");
  }
}
