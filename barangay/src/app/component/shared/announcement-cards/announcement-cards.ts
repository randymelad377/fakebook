import { Component, inject, input } from '@angular/core';
import { Auth } from '../../../core/services/auth';
import { AnnouncementSearchService } from '../../../core/services/announcement-search';

@Component({
  selector: 'app-announcement-cards',
  imports: [],
  templateUrl: './announcement-cards.html',
  styleUrl: './announcement-cards.css',
})
export class AnnouncementCards {
  type = input("");
  auth = inject(Auth);
  search = inject(AnnouncementSearchService);

  selectedAnnouncementId = 0;
  selectAnnouncement(id : number){
    if(this.selectedAnnouncementId === id){
      this.selectedAnnouncementId = 0;
      return;
    }
    this.selectedAnnouncementId = id;
  }

}
