import { Component, HostListener, inject } from '@angular/core';
import { RightAside } from '../../component/layout/right-aside/right-aside';
import { LeftAside } from '../../component/layout/left-aside/left-aside';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../component/layout/header/header';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'app-user-main-layout',
  imports: [RouterOutlet, RightAside, LeftAside, Header],
  templateUrl: './user-main-layout.html',
  styleUrl: './user-main-layout.css',
})
export class UserMainLayout {

  //USER INFORMATION
  private auth = inject(Auth);
  user = this.auth.currentUser();
  isLogin = this.auth.getIsLogin();
  
  //left and right aside
  showLeftAside = window.innerWidth > 900;
  showRightAside = window.innerWidth > 1100;

  //WIDTH
  currentWidth = window.innerWidth;
  @HostListener("window:resize")
  onResize(){
    this.currentWidth = window.innerWidth;
    this.showLeftAside = window.innerWidth > 900;
    this.showRightAside = window.innerWidth > 1100;
  }

}
