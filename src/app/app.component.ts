import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeadlinesService } from './service/headlines.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('navBurger') navBurger !: ElementRef;
  @ViewChild('navMenu') navMenu !: ElementRef;
  title = 'newsWebsite';

  darkMode: boolean = false;

  constructor(public service: HeadlinesService){}

  enableDarkMode() {
    this.service.darkMode = !this.service.darkMode;
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }
}
