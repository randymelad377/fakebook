import { Component, inject } from '@angular/core';
import { AnnouncementCards } from '../../shared/announcement-cards/announcement-cards';

@Component({
  selector: 'app-resident-concern',
  imports: [AnnouncementCards],
  templateUrl: './resident-concern.html',
  styleUrl: './resident-concern.css',
})
export class ResidentConcern {
  type = "resident-announcement";
}
