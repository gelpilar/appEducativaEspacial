import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  flag: boolean = false;

  aparecer() {
    if (this.flag) {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }
}