import { Component, inject, signal } from '@angular/core';
import { SearchBar } from '../../component/shared/search-bar/search-bar';
import { Auth } from '../../core/services/auth';
import {RouterOutlet } from '@angular/router';

import { AnnouncementSearchService, SearchBy } from '../../core/services/announcement-search';

@Component({
  selector: 'app-user-dashboard',
  imports: [RouterOutlet, SearchBar],
  providers: [AnnouncementSearchService],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css',
})
export class UserDashboard {

  auth = inject(Auth);
  search = inject(AnnouncementSearchService);
  user = this.auth.currentUser();
  isLogin = this.auth.getIsLogin();

  add_label = this.user.role === "user" ? "Add Concern" :
              this.user.role === "sk" ?  "Add Sk Announcement" :
                                          "Add Barangay Announcement"; 

  showSeachBy = false;
  toggleShowSearchBy(){
    this.showSeachBy = !this.showSeachBy;
  }
  
  toggleSearchBy(searchBy: SearchBy){
    this.search.searchBy.set(searchBy);
  }
}
