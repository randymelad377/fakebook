import { Component, inject } from '@angular/core';
import { AnnouncementCards } from '../../shared/announcement-cards/announcement-cards';
@Component({
  selector: 'app-barangay-announcement',
  imports: [AnnouncementCards],
  templateUrl: './barangay-announcement.html',
  styleUrl: './barangay-announcement.css',
})
export class BarangayAnnouncement {
  type = "barangay-announcement";
}
