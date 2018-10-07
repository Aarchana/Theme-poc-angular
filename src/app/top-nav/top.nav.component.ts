import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top.nav.component.html',
  styleUrls: ['./top.nav.component.scss']
})
export class TopNavComponent implements OnInit {
  public themeWrapper = document.querySelector('body');
  public themeColor;
  constructor() { }

  ngOnInit() {
    if (!this.themeColor) {
      this.themeColor = '#393075';
    }
    this.changeTheme();
  }

  public changeTheme() {
    this.themeWrapper.style.setProperty('--themeColor', this.themeColor);
  }

}
