import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isLogin = input(false);
  currentWidth = window.innerWidth;
  showLeftAside = model(window.innerWidth < 900);
  showRightAside = model(window.innerWidth < 600);
  
  toggleShowLeftAside() {
    this.showLeftAside.update(value => !value);
    this.showRightAside.set(false);
  }
  
  toggleShowRightAside() {
    this.showRightAside.update(value => !value);
    this.showLeftAside.set(false);
  }
}
