import { Injectable, signal } from '@angular/core';
import { User } from '../../models/user';
import { Announcement } from '../../models/announcement';

export type SearchBy =
  | 'category'
  | 'title'
  | 'description'
  | 'poster_name';

@Injectable()
export class AnnouncementSearchService {
  searchInput = signal('');
  searchBy = signal<SearchBy>('category');

  announcements: Announcement[] = [
  {
    id: 1,
    poster_name: 'Juan Dela Cruz',
    poster_image: 'image.jpg',
    category: 'barangay-announcement',
    title: 'Barangay Clean-Up Drive',
    description: 'The barangay clean-up drive will be held this Saturday at 7:00 AM. Residents are encouraged to participate.',
    images: ['image.jpg', 'image.jpg'],
    date_posted: '2026-08-21',
    poster_role: 'barangay'
  },
  {
    id: 2,
    poster_name: 'Maria Santos',
    poster_image: 'image.jpg',
    category: 'sk-announcement',
    title: 'Youth Sports Program',
    description: 'The Sangguniang Kabataan will conduct a youth sports program for residents ages 15 to 24.',
    images: ['image.jpg'],
    date_posted: '2026-08-20',
    poster_role: 'sk'
  },
  {
    id: 3,
    poster_name: 'Pedro Reyes',
    poster_image: 'image.jpg',
    category: 'resident-announcement',
    title: 'Community Meeting',
    description: 'A community meeting will be held at the barangay hall to discuss concerns and suggestions from residents.',
    images: ['image.jpg', 'image.jpg', 'image.jpg'],
    date_posted: '2026-08-19',
    poster_role: 'user'
  },
  {
    id: 4,
    poster_name: 'Ana Garcia',
    poster_image: 'image.jpg',
    category: 'barangay-announcement',
    title: 'Scheduled Water Interruption',
    description: 'Water service will be temporarily unavailable tomorrow from 9:00 AM to 3:00 PM due to maintenance.',
    images: ['image.jpg', 'image.jpg'],
    date_posted: '2026-08-18',
    poster_role: 'barangay'
  },
  {
    id: 5,
    poster_name: 'Carlos Mendoza',
    poster_image: 'image.jpg',
    category: 'sk-announcement',
    title: 'Basketball Tournament Registration',
    description: 'Registration for the upcoming inter-barangay basketball tournament is now open.',
    images: ['image.jpg', 'image.jpg', 'image.jpg', 'image.jpg'],
    date_posted: '2026-08-17',
    poster_role: 'sk'
  },
  {
    id: 6,
    poster_name: 'Sofia Ramos',
    poster_image: 'image.jpg',
    category: 'resident-announcement',
    title: 'Community Facility Suggestions',
    description: 'Residents are invited to submit suggestions for improving the barangay community facilities.',
    images: [],
    date_posted: '2026-08-16',
    poster_role: 'user'
  },
  {
    id: 7,
    poster_name: 'Roberto Cruz',
    poster_image: 'image.jpg',
    category: 'barangay-announcement',
    title: 'Free Health Checkup',
    description: 'The barangay health center will provide free basic health checkups for residents this Friday.',
    images: ['image.jpg'],
    date_posted: '2026-08-15',
    poster_role: 'barangay'
  },
  {
    id: 8,
    poster_name: 'Lisa Fernandez',
    poster_image: 'image.jpg',
    category: 'sk-announcement',
    title: 'Youth Educational Assistance',
    description: 'The SK office is accepting applications for the youth educational assistance program.',
    images: ['image.jpg', 'image.jpg'],
    date_posted: '2026-08-14',
    poster_role: 'sk'
  },
  {
    id: 9,
    poster_name: 'Mark Villanueva',
    poster_image: 'image.jpg',
    category: 'resident-announcement',
    title: 'Lost Wallet Found',
    description: 'A lost wallet was found near the barangay basketball court. The owner may claim it at the barangay office.',
    images: ['image.jpg', 'image.jpg', 'image.jpg'],
    date_posted: '2026-08-13',
    poster_role: 'user'
  },
  {
    id: 10,
    poster_name: 'Elena Torres',
    poster_image: 'image.jpg',
    category: 'barangay-announcement',
    title: 'Barangay Hall Maintenance',
    description: 'The barangay hall will be closed on Monday for scheduled maintenance and administrative work.',
    images: ['image.jpg'],
    date_posted: '2026-08-12',
    poster_role: 'barangay'
  }
];
}