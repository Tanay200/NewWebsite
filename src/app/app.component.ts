import { Component } from '@angular/core';
import { HeadlinesService } from './service/headlines.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsWebsite';

  darkMode: boolean = false;

  constructor(public service: HeadlinesService){}

  enableDarkMode() {
    this.service.darkMode = !this.service.darkMode;
  }
}
