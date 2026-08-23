import { Component } from '@angular/core';
import { AnnouncementCards } from '../../shared/announcement-cards/announcement-cards';

@Component({
  selector: 'app-sk-announcement',
  imports: [AnnouncementCards],
  templateUrl: './sk-announcement.html',
  styleUrl: './sk-announcement.css',
})
export class SkAnnouncement {
  type = "sk-announcement";
}
