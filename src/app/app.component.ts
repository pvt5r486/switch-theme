import { Component, OnInit } from '@angular/core';
import { CSSLoaderService } from './css-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isDarkTheme = false;

  constructor(
    private cssLoder: CSSLoaderService,
  ) { }

  ngOnInit() {
    if (this.loadLocalStorage()) {
      switch (this.loadLocalStorage()) {
        case 'dark-theme':
          this.isDarkTheme = true;
          break;

        case 'default-theme':
          this.isDarkTheme = false;
          break;
      }
    }
    this.switchTheme();
  }

  switchTheme(): void {
    if (this.isDarkTheme) {
      this.cssLoder.switchCSS('dark-theme.css');
      localStorage.setItem('theme', 'dark-theme');
    } else {
      this.cssLoder.switchCSS('default-theme.css');
      localStorage.setItem('theme', 'default-theme');
    }
  }

  loadLocalStorage(): string {
    return localStorage.getItem('theme');
  }
}
