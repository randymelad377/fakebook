import { Component, input, model } from '@angular/core';
import { User } from '../../../models/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-left-aside',
  imports: [RouterLink],
  templateUrl: './left-aside.html',
  styleUrl: './left-aside.css',
})
export class LeftAside {
  currentWidth = input<number>(0);
  user = input<User | null>(null);
  isLogin = input(false);
  showLeftAside = model(window.innerWidth < 900);
  
  toggleShowLeftAside() {
    this.showLeftAside.update(value => !value);
  }
}
