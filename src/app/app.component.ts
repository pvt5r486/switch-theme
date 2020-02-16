import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isDarkTheme = false;

  constructor() { }

  ngOnInit() {
    this.switchTheme();
  }

  switchTheme(): void {
    console.log(this.isDarkTheme);
  }
}
