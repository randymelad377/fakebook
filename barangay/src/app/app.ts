import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Page = 'overview' | 'pets' | 'users' | 'clinics' | 'reports' | 'announcements' | 'system';
type AdminRole = 'Super Admin' | 'Barangay Admin';
type PetCategory = 'Rehoming' | 'Lost' | 'Found';
type ListingStatus = 'Pending' | 'Verified' | 'Deleted';
type Availability = 'Available' | 'Not available';
type UserRole = 'Resident' | 'Representative' | 'Admin' | 'Super Admin';
type UserStatus = 'Active' | 'Blocked' | 'Pending Approval' | 'Banned' | 'Suspended';

interface Pet {
  id: number; name: string; species: string; breed: string; color: string; age: string; sex: string;
  barangay: string; category: PetCategory; listingStatus: ListingStatus; availability: Availability;
  ownerId: number; ownerName: string; ownerInitials: string; ownerColor: string; image: string;
  description: string; reports: number; updated: string;
}

interface AdminUser {
  id: number; name: string; username: string; initials: string; color: string; barangay: string;
  role: UserRole; status: UserStatus; pets: number; reports: number; joined: string;
  contact: string; address: string;
}

interface Clinic {
  id: number; name: string; barangay: string; type: 'General' | 'Emergency' | 'Specialty';
  verified: boolean; views: number; reports: number; phone: string; hours: string; x: number; y: number;
}

interface ModerationReport {
  id: string; target: 'Pet' | 'User' | 'Clinic'; subject: string; reason: string; reporter: string;
  barangay: string; priority: 'High' | 'Medium' | 'Low'; status: 'Open' | 'In review' | 'Resolved'; submitted: string;
}

@Component({ selector: 'app-root', imports: [CommonModule, FormsModule], templateUrl: './app.html' })
export class App {
  readonly barangayScope = 'Carig Norte';
  readonly navItems: { label: string; page: Page; icon: string; badge?: number }[] = [
    { label: 'Overview', page: 'overview', icon: 'fa-chart-pie' },
    { label: 'Pets', page: 'pets', icon: 'fa-paw', badge: 12 },
    { label: 'Users', page: 'users', icon: 'fa-users' },
    { label: 'Vet clinics', page: 'clinics', icon: 'fa-house-medical' },
    { label: 'Reports', page: 'reports', icon: 'fa-shield-halved', badge: 8 },
    { label: 'Announcements', page: 'announcements', icon: 'fa-bullhorn' },
    { label: 'System', page: 'system', icon: 'fa-sliders' },
  ];

  readonly pets: Pet[] = [
    { id: 1, name: 'Milo', species: 'Dog', breed: 'Golden Retriever', color: 'Golden', age: '2 years', sex: 'Male', barangay: 'Carig Norte', category: 'Rehoming', listingStatus: 'Pending', availability: 'Available', ownerId: 1, ownerName: 'Monkey D. Luffy', ownerInitials: 'ML', ownerColor: '#df9d36', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85', description: 'Gentle, house-trained, and comfortable around children. Vaccination card is available.', reports: 0, updated: '12 min ago' },
    { id: 2, name: 'Luna', species: 'Cat', breed: 'Domestic Shorthair', color: 'Calico', age: '1 year', sex: 'Female', barangay: 'Centro 10', category: 'Lost', listingStatus: 'Verified', availability: 'Available', ownerId: 2, ownerName: 'Naruto Uzumaki', ownerInitials: 'NU', ownerColor: '#dc7243', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=85', description: 'Last seen near the public market wearing a pink collar with a small bell.', reports: 1, updated: '1 hr ago' },
    { id: 3, name: 'Bruno', species: 'Dog', breed: 'Aspin', color: 'Brown & white', age: '3 years', sex: 'Male', barangay: 'Ugac Norte', category: 'Found', listingStatus: 'Pending', availability: 'Available', ownerId: 3, ownerName: 'Maya Santos', ownerInitials: 'MS', ownerColor: '#7564a5', image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=85', description: 'Friendly male dog found near Cagayan State University. Currently in safe temporary care.', reports: 2, updated: '2 hrs ago' },
    { id: 4, name: 'Pepper', species: 'Cat', breed: 'Persian Mix', color: 'Gray', age: '8 months', sex: 'Female', barangay: 'Cataggaman Nuevo', category: 'Rehoming', listingStatus: 'Verified', availability: 'Available', ownerId: 3, ownerName: 'Maya Santos', ownerInitials: 'MS', ownerColor: '#7564a5', image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=900&q=85', description: 'Indoor cat looking for a patient home. Vaccinated and litter trained.', reports: 0, updated: 'Yesterday' },
    { id: 5, name: 'Coco', species: 'Dog', breed: 'Shih Tzu', color: 'White & tan', age: '4 years', sex: 'Female', barangay: 'Carig Norte', category: 'Lost', listingStatus: 'Verified', availability: 'Not available', ownerId: 4, ownerName: 'Elena Cruz', ownerInitials: 'EC', ownerColor: '#428276', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85', description: 'Coco has safely returned home. The listing is retained for transaction history.', reports: 0, updated: 'Sep 19' },
    { id: 6, name: 'Sky', species: 'Bird', breed: 'Budgerigar', color: 'Blue', age: '1 year', sex: 'Male', barangay: 'Pengue-Ruyu', category: 'Found', listingStatus: 'Deleted', availability: 'Not available', ownerId: 2, ownerName: 'Naruto Uzumaki', ownerInitials: 'NU', ownerColor: '#dc7243', image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=900&q=85', description: 'Retrieved by the owner after identity verification.', reports: 1, updated: 'Sep 17' },
    { id: 7, name: 'Biscuit', species: 'Dog', breed: 'Beagle', color: 'Tri-color', age: '5 years', sex: 'Male', barangay: 'Carig Norte', category: 'Rehoming', listingStatus: 'Pending', availability: 'Available', ownerId: 5, ownerName: 'Paolo Reyes', ownerInitials: 'PR', ownerColor: '#5274a8', image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=900&q=85', description: 'Calm adult beagle with complete vaccine records and a friendly temperament.', reports: 1, updated: '3 hrs ago' },
  ];

  readonly users: AdminUser[] = [
    { id: 1, name: 'Monkey D. Luffy', username: 'luffy377', initials: 'ML', color: '#df9d36', barangay: 'Carig Norte', role: 'Resident', status: 'Active', pets: 2, reports: 0, joined: 'Jan 14, 2025', contact: '+63 917 377 0101', address: '18 Mabini Street, Carig Norte' },
    { id: 2, name: 'Naruto Uzumaki', username: 'naruto377', initials: 'NU', color: '#dc7243', barangay: 'Centro 10', role: 'Representative', status: 'Active', pets: 2, reports: 1, joined: 'Mar 2, 2025', contact: '+63 917 377 0202', address: '42 Luna Street, Centro 10' },
    { id: 3, name: 'Maya Santos', username: 'maya842', initials: 'MS', color: '#7564a5', barangay: 'Cataggaman Nuevo', role: 'Resident', status: 'Pending Approval', pets: 2, reports: 2, joined: 'Aug 9, 2025', contact: '+63 918 842 7351', address: '7 Maharlika Road, Cataggaman Nuevo' },
    { id: 4, name: 'Elena Cruz', username: 'elenacruz', initials: 'EC', color: '#428276', barangay: 'Carig Norte', role: 'Representative', status: 'Active', pets: 3, reports: 0, joined: 'Nov 21, 2024', contact: '+63 917 555 0194', address: 'San Gabriel Village, Carig Norte' },
    { id: 5, name: 'Paolo Reyes', username: 'paoloreyes', initials: 'PR', color: '#5274a8', barangay: 'Carig Norte', role: 'Resident', status: 'Suspended', pets: 1, reports: 3, joined: 'Jun 18, 2025', contact: '+63 905 321 8840', address: 'Dalan na Pagayaya, Carig Norte' },
    { id: 6, name: 'Sofia Mendoza', username: 'sofia.admin', initials: 'SM', color: '#955c71', barangay: 'Centro 8', role: 'Admin', status: 'Active', pets: 0, reports: 0, joined: 'Oct 8, 2024', contact: '+63 917 400 1182', address: 'Centro 8, Tuguegarao City' },
  ];

  readonly clinics: Clinic[] = [
    { id: 1, name: 'Cagayan Valley Veterinary Clinic', barangay: 'Carig Norte', type: 'General', verified: true, views: 1842, reports: 0, phone: '+63 917 820 2241', hours: '8:00 AM – 6:00 PM', x: 24, y: 37 },
    { id: 2, name: 'Pet Haven Animal Clinic', barangay: 'Centro 10', type: 'Emergency', verified: true, views: 1289, reports: 2, phone: '+63 917 337 1180', hours: 'Open 24 hours', x: 65, y: 29 },
    { id: 3, name: 'Tuguegarao Pet Care Center', barangay: 'Balzain East', type: 'Specialty', verified: false, views: 632, reports: 1, phone: '+63 905 226 8841', hours: '9:00 AM – 7:00 PM', x: 48, y: 67 },
    { id: 4, name: 'City Veterinary Office', barangay: 'Centro 1', type: 'General', verified: true, views: 2115, reports: 0, phone: '(078) 304 5001', hours: '8:00 AM – 5:00 PM', x: 78, y: 72 },
  ];

  readonly reports: ModerationReport[] = [
    { id: 'RPT-2481', target: 'Pet', subject: 'Bruno · Found listing', reason: 'Possible duplicate listing', reporter: 'Angela D.', barangay: 'Ugac Norte', priority: 'High', status: 'Open', submitted: '18 min ago' },
    { id: 'RPT-2478', target: 'User', subject: 'Paolo Reyes', reason: 'Repeated misleading information', reporter: '2 residents', barangay: 'Carig Norte', priority: 'High', status: 'In review', submitted: '1 hr ago' },
    { id: 'RPT-2473', target: 'Clinic', subject: 'Pet Haven Animal Clinic', reason: 'Incorrect operating hours', reporter: 'Mariel S.', barangay: 'Centro 10', priority: 'Medium', status: 'Open', submitted: '3 hrs ago' },
    { id: 'RPT-2469', target: 'Pet', subject: 'Sky · Found listing', reason: 'Outdated listing', reporter: 'Naruto U.', barangay: 'Pengue-Ruyu', priority: 'Low', status: 'Resolved', submitted: 'Yesterday' },
  ];

  readonly auditEntries = [
    { admin: 'Andrea Villanueva', action: 'Verified pet listing', target: 'Milo · PET-1028', time: '9:42 AM', tone: 'green' },
    { admin: 'Marco Lim', action: 'Suspended account for 7 days', target: 'Paolo Reyes', time: '8:16 AM', tone: 'orange' },
    { admin: 'Sofia Mendoza', action: 'Updated clinic details', target: 'City Veterinary Office', time: 'Yesterday', tone: 'blue' },
    { admin: 'Andrea Villanueva', action: 'Published barangay announcement', target: 'Anti-Rabies Drive', time: 'Yesterday', tone: 'purple' },
  ];

  page = signal<Page>('overview');
  adminRole = signal<AdminRole>('Super Admin');
  mobileMenuOpen = signal(false);
  selectedPet = signal<Pet | null>(null);
  selectedUser = signal<AdminUser | null>(null);
  selectedClinic = signal<Clinic | null>(null);
  showAnnouncementComposer = signal(false);
  showClinicForm = signal(false);
  toast = signal('');
  dataVersion = signal(0);

  petSearch = signal('');
  petSearchBy = signal<'breed' | 'species' | 'color'>('breed');
  petBarangay = signal('All barangays');
  petCategory = signal<'All transactions' | PetCategory>('All transactions');
  petListingStatus = signal<'All statuses' | ListingStatus>('All statuses');
  petAvailability = signal<'All availability' | Availability>('All availability');
  userSearch = signal('');
  userBarangay = signal('All barangays');
  userRole = signal<'All roles' | UserRole>('All roles');
  userStatus = signal<'All statuses' | UserStatus>('All statuses');
  clinicSearch = signal('');
  clinicType = signal<'All types' | Clinic['type']>('All types');
  reportTarget = signal<'All' | ModerationReport['target']>('All');
  announcementAudience = 'All residents';
  announcementTitle = '';
  announcementBody = '';

  readonly scopeLabel = computed(() => this.adminRole() === 'Super Admin' ? 'All 49 barangays' : this.barangayScope);
  readonly pendingPets = computed(() => this.visiblePets().filter((pet) => pet.listingStatus === 'Pending').length);

  readonly visiblePets = computed(() => {
    this.dataVersion();
    const query = this.petSearch().trim().toLowerCase();
    return this.pets.filter((pet) =>
      (this.adminRole() === 'Super Admin' || pet.barangay === this.barangayScope) &&
      (this.petBarangay() === 'All barangays' || pet.barangay === this.petBarangay()) &&
      (this.petCategory() === 'All transactions' || pet.category === this.petCategory()) &&
      (this.petListingStatus() === 'All statuses' || pet.listingStatus === this.petListingStatus()) &&
      (this.petAvailability() === 'All availability' || pet.availability === this.petAvailability()) &&
      (!query || pet[this.petSearchBy()].toLowerCase().includes(query))
    );
  });

  readonly visibleUsers = computed(() => {
    this.dataVersion();
    const query = this.userSearch().trim().toLowerCase();
    return this.users.filter((user) =>
      (this.adminRole() === 'Super Admin' || user.barangay === this.barangayScope) &&
      (this.userBarangay() === 'All barangays' || user.barangay === this.userBarangay()) &&
      (this.adminRole() !== 'Super Admin' || this.userRole() === 'All roles' || user.role === this.userRole()) &&
      (this.userStatus() === 'All statuses' || user.status === this.userStatus()) &&
      (!query || user.name.toLowerCase().includes(query))
    );
  });

  readonly visibleClinics = computed(() => {
    this.dataVersion();
    const query = this.clinicSearch().trim().toLowerCase();
    return this.clinics.filter((clinic) =>
      (this.adminRole() === 'Super Admin' || clinic.barangay === this.barangayScope) &&
      (this.clinicType() === 'All types' || clinic.type === this.clinicType()) &&
      (!query || `${clinic.name} ${clinic.barangay}`.toLowerCase().includes(query))
    );
  });

  readonly visibleReports = computed(() => {
    this.dataVersion();
    return this.reports.filter((report) =>
      (this.adminRole() === 'Super Admin' || report.barangay === this.barangayScope) &&
      (this.reportTarget() === 'All' || report.target === this.reportTarget())
    );
  });

  readonly selectedUserPets = computed(() => {
    const user = this.selectedUser();
    return user ? this.pets.filter((pet) => pet.ownerId === user.id) : [];
  });

  navigate(page: Page): void {
    this.page.set(page);
    this.mobileMenuOpen.set(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setRole(role: AdminRole): void {
    this.adminRole.set(role);
    this.petBarangay.set('All barangays');
    this.userBarangay.set('All barangays');
    this.selectedPet.set(null);
    this.selectedUser.set(null);
    this.selectedClinic.set(null);
    this.showToast(role === 'Super Admin' ? 'City-wide administration enabled.' : `Scope limited to ${this.barangayScope}.`);
  }

  showToast(message: string): void {
    this.toast.set(message);
    window.setTimeout(() => this.toast.set(''), 2800);
  }

  openPet(pet: Pet): void { this.selectedPet.set(pet); }
  openUser(user: AdminUser): void { this.selectedUser.set(user); }
  openClinic(clinic: Clinic): void { this.selectedClinic.set(clinic); }

  updatePetStatus(pet: Pet, status: ListingStatus): void {
    pet.listingStatus = status;
    this.dataVersion.update((value) => value + 1);
    this.selectedPet.set({ ...pet });
    this.showToast(`${pet.name} marked ${status.toLowerCase()}. Audit log updated.`);
  }

  updateAvailability(pet: Pet, availability: Availability): void {
    pet.availability = availability;
    this.dataVersion.update((value) => value + 1);
    this.selectedPet.set({ ...pet });
    this.showToast(`${pet.name}'s availability was updated.`);
  }

  updateUserStatus(user: AdminUser, status: UserStatus): void {
    user.status = status;
    this.dataVersion.update((value) => value + 1);
    this.selectedUser.set({ ...user });
    this.showToast(`${user.name} is now ${status.toLowerCase()}.`);
  }

  updateUserRole(user: AdminUser, role: UserRole): void {
    if (this.adminRole() !== 'Super Admin') return;
    user.role = role;
    this.dataVersion.update((value) => value + 1);
    this.selectedUser.set({ ...user });
    this.showToast(`${user.name}'s role changed to ${role}.`);
  }

  verifyClinic(clinic: Clinic): void {
    if (this.adminRole() !== 'Super Admin') return;
    clinic.verified = true;
    this.dataVersion.update((value) => value + 1);
    this.selectedClinic.set({ ...clinic });
    this.showToast(`${clinic.name} is now verified.`);
  }

  resolveReport(report: ModerationReport, action: 'warned' | 'dismissed' | 'actioned'): void {
    report.status = 'Resolved';
    this.dataVersion.update((value) => value + 1);
    this.showToast(`${report.id} ${action}. Moderation log updated.`);
  }

  openOwner(pet: Pet): void {
    const owner = this.users.find((user) => user.id === pet.ownerId);
    if (!owner) return;
    this.selectedPet.set(null);
    this.openUser(owner);
  }

  sendAnnouncement(): void {
    if (!this.announcementTitle.trim() || !this.announcementBody.trim()) {
      this.showToast('Add a title and message before publishing.');
      return;
    }
    this.showAnnouncementComposer.set(false);
    this.showToast(`Announcement published to ${this.announcementAudience.toLowerCase()}.`);
    this.announcementTitle = '';
    this.announcementBody = '';
  }

  useTemplate(title: string, body: string): void {
    this.announcementTitle = title;
    this.announcementBody = body;
    this.showAnnouncementComposer.set(true);
  }
}
