import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Page = 'home' | 'pets' | 'users' | 'notification' | 'message' | 'setting';
type PetCategory = 'All pets' | 'Rehoming' | 'Lost' | 'Found';
type PetStatus = 'Available' | 'Lost' | 'Found' | 'Rehomed' | 'Returned' | 'Retrieved';
type SettingsPage = 'Personal Information' | 'Change Password' | 'Feedback' | 'Blocked List' | 'History' | 'My Pets' | 'Request as Barangay Representative';

interface Account {
  id: number; fullName: string; username: string; password: string; barangay: string;
  address: string; phone: string; initials: string; color: string;
}

interface Pet {
  id: number; name: string; species: string; breed: string; color: string; age: string; sex: string;
  barangay: string; category: Exclude<PetCategory, 'All pets'>; status: PetStatus; ownerId: number;
  ownerName: string; address: string; phone: string; image: string; description: string; posted: string;
}

interface Conversation {
  name: string; initials: string; color: string; preview: string; time: string;
  unread: number; online: boolean; ai?: boolean;
}

interface GeneralNotification {
  id: number; title: string; time: string; message: string; icon: string; tone: string; unread?: boolean;
}

@Component({ selector: 'app-root', imports: [CommonModule, FormsModule], templateUrl: './app.html' })
export class App {
  readonly accounts: Account[] = [
    { id: 1, fullName: 'Monkey D. Luffy', username: 'luffy377', password: 'password', barangay: 'Carig Norte', address: '18 Mabini Street, Carig Norte, Tuguegarao City', phone: '+63 917 377 0101', initials: 'ML', color: '#f59e0b' },
    { id: 2, fullName: 'Naruto Uzumaki', username: 'naruto377', password: 'password', barangay: 'Centro 10', address: '42 Luna Street, Centro 10, Tuguegarao City', phone: '+63 917 377 0202', initials: 'NU', color: '#f97316' },
    { id: 3, fullName: 'Maya Santos', username: 'maya842', password: 'paws842!', barangay: 'Cataggaman Nuevo', address: '7 Maharlika Road, Cataggaman Nuevo, Tuguegarao City', phone: '+63 918 842 7351', initials: 'MS', color: '#8b5cf6' },
  ];

  readonly pets: Pet[] = [
    { id: 1, name: 'Milo', species: 'Dog', breed: 'Golden Retriever', color: 'Golden', age: '2 years', sex: 'Male', barangay: 'Carig Norte', category: 'Rehoming', status: 'Available', ownerId: 1, ownerName: 'Monkey D. Luffy', address: '18 Mabini Street, Carig Norte, Tuguegarao City', phone: '+63 917 377 0101', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=85', description: 'Gentle, house-trained, and wonderful with children. Milo loves morning walks and belly rubs.', posted: '2 hours ago' },
    { id: 2, name: 'Luna', species: 'Cat', breed: 'Domestic Shorthair', color: 'Calico', age: '1 year', sex: 'Female', barangay: 'Centro 10', category: 'Lost', status: 'Lost', ownerId: 2, ownerName: 'Naruto Uzumaki', address: '42 Luna Street, Centro 10, Tuguegarao City', phone: '+63 917 377 0202', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=85', description: 'Last seen near the public market wearing a pink collar with a small bell. She is shy around strangers.', posted: '5 hours ago' },
    { id: 3, name: 'Bruno', species: 'Dog', breed: 'Aspin', color: 'Brown & white', age: '3 years', sex: 'Male', barangay: 'Ugac Norte', category: 'Found', status: 'Found', ownerId: 3, ownerName: 'Maya Santos', address: '7 Maharlika Road, Cataggaman Nuevo, Tuguegarao City', phone: '+63 918 842 7351', image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1200&q=85', description: 'Friendly male dog found near Cagayan State University. Safe and being cared for while we find his family.', posted: 'Yesterday' },
    { id: 4, name: 'Pepper', species: 'Cat', breed: 'Persian Mix', color: 'Gray', age: '8 months', sex: 'Female', barangay: 'Cataggaman Nuevo', category: 'Rehoming', status: 'Available', ownerId: 3, ownerName: 'Maya Santos', address: '7 Maharlika Road, Cataggaman Nuevo, Tuguegarao City', phone: '+63 918 842 7351', image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1200&q=85', description: 'Quiet indoor cat looking for a patient family. Vaccinated and litter trained.', posted: '2 days ago' },
    { id: 5, name: 'Coco', species: 'Dog', breed: 'Shih Tzu', color: 'White & tan', age: '4 years', sex: 'Female', barangay: 'Balzain East', category: 'Lost', status: 'Returned', ownerId: 1, ownerName: 'Monkey D. Luffy', address: '18 Mabini Street, Carig Norte, Tuguegarao City', phone: '+63 917 377 0101', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=85', description: 'Coco has safely returned home. Thank you to everyone who shared her listing.', posted: '4 days ago' },
    { id: 6, name: 'Sky', species: 'Bird', breed: 'Budgerigar', color: 'Blue', age: '1 year', sex: 'Male', barangay: 'Pengue-Ruyu', category: 'Found', status: 'Retrieved', ownerId: 2, ownerName: 'Naruto Uzumaki', address: '42 Luna Street, Centro 10, Tuguegarao City', phone: '+63 917 377 0202', image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=85', description: 'Sky was reunited with his owner after being found near the riverside.', posted: '1 week ago' },
  ];

  readonly users = [
    { ...this.accounts[0], pets: 2, verified: true }, { ...this.accounts[1], pets: 2, verified: true }, { ...this.accounts[2], pets: 2, verified: true },
    { id: 4, fullName: 'Elena Cruz', username: 'elenacruz', barangay: 'Ugac Sur', address: 'Ugac Sur, Tuguegarao City', phone: '+63 917 555 0194', initials: 'EC', color: '#0f766e', pets: 3, verified: true },
    { id: 5, fullName: 'Paolo Reyes', username: 'paoloreyes', barangay: 'Balzain West', address: 'Balzain West, Tuguegarao City', phone: '+63 905 321 8840', initials: 'PR', color: '#2563eb', pets: 1, verified: false },
  ];

  page = signal<Page>('home'); settingsPage = signal<SettingsPage>('Personal Information'); mobileMenuOpen = signal(false);
  selectedPet = signal<Pet | null>(null); selectedUser = signal<(typeof this.users)[number] | null>(null);
  showAddPet = signal(false); showNewMessage = signal(false); loggedIn = signal(true); toast = signal(''); currentAccount = signal(this.accounts[0]);
  petCategory = signal<PetCategory>('All pets'); petSearch = signal(''); petFilter = signal<'color' | 'species' | 'breed'>('breed');
  petBarangay = signal('All barangays'); userSearch = signal(''); userBarangay = signal('All barangays'); messageSearch = signal('');
  activeChat = signal(0); newMessage = ''; newRecipient = 'Paolo Reyes'; loginUsername = 'luffy377'; loginPassword = 'password'; loginError = ''; feedback = '';
  blockedUserIds = signal<number[]>([]); deletedNotificationIds = signal<number[]>([]); criticalResolved = signal<'accepted' | 'denied' | null>(null); historyCleared = signal(false);
  petStatuses: PetStatus[] = ['Available', 'Lost', 'Found', 'Rehomed', 'Returned', 'Retrieved'];

  conversations: Conversation[] = [
    { name: 'Elena Cruz', initials: 'EC', color: '#0f766e', preview: 'Milo would have a loving home with us.', time: '9:42 AM', unread: 2, online: true },
    { name: 'Naruto Uzumaki', initials: 'NU', color: '#f97316', preview: 'Thank you for keeping an eye out for Luna!', time: 'Yesterday', unread: 0, online: true },
    { name: 'Petlink Care AI', initials: 'AI', color: '#526d57', preview: 'Ask me about everyday pet health care.', time: 'Mon', unread: 0, online: true, ai: true },
    { name: 'Maya Santos', initials: 'MS', color: '#8b5cf6', preview: 'I uploaded a clearer photo of Bruno.', time: 'Sun', unread: 0, online: false },
  ];

  readonly generalNotifications: GeneralNotification[] = [
    { id: 1, title: 'Your pet listing was verified', time: '2 hours ago', message: 'Milo is now visible to residents across Tuguegarao City.', icon: 'fa-shield-halved', tone: 'success', unread: true },
    { id: 2, title: 'New barangay announcement', time: '5 hours ago', message: 'Free Anti-Rabies Vaccination Drive this Saturday at Carig Norte Barangay Hall.', icon: 'fa-bullhorn', tone: 'blue' },
    { id: 3, title: 'New message from Elena', time: 'Yesterday', message: '“Milo would have a loving home with us.”', icon: 'fa-comment-dots', tone: 'purple' },
  ];

  readonly filteredPets = computed(() => {
    const query = this.petSearch().trim().toLowerCase();
    return this.pets.filter((pet) => (this.petCategory() === 'All pets' || pet.category === this.petCategory()) &&
      (this.petBarangay() === 'All barangays' || pet.barangay === this.petBarangay()) && (!query || pet[this.petFilter()].toLowerCase().includes(query)));
  });

  readonly filteredUsers = computed(() => {
    const query = this.userSearch().trim().toLowerCase();
    return this.users.filter((user) => (!query || user.fullName.toLowerCase().includes(query)) &&
      (this.userBarangay() === 'All barangays' || user.barangay === this.userBarangay()));
  });

  readonly navItems: { label: string; page: Page; icon: string }[] = [
    { label: 'Home', page: 'home', icon: 'fa-house' }, { label: 'Pets', page: 'pets', icon: 'fa-paw' },
    { label: 'Users', page: 'users', icon: 'fa-user-group' }, { label: 'Notification', page: 'notification', icon: 'fa-bell' },
    { label: 'Message', page: 'message', icon: 'fa-comment-dots' }, { label: 'Setting', page: 'setting', icon: 'fa-gear' },
  ];
  readonly settingItems: { label: SettingsPage; icon: string }[] = [
    { label: 'Personal Information', icon: 'fa-address-card' }, { label: 'Change Password', icon: 'fa-lock' },
    { label: 'Feedback', icon: 'fa-message' }, { label: 'Blocked List', icon: 'fa-user-slash' },
    { label: 'History', icon: 'fa-clock-rotate-left' }, { label: 'My Pets', icon: 'fa-shield-dog' },
    { label: 'Request as Barangay Representative', icon: 'fa-id-badge' },
  ];

  navigate(page: Page): void { this.page.set(page); this.mobileMenuOpen.set(false); }
  openPet(pet: Pet): void { this.selectedPet.set(pet); }
  openUser(user: (typeof this.users)[number]): void { this.selectedUser.set(user); }
  showToast(message: string): void { this.toast.set(message); window.setTimeout(() => this.toast.set(''), 2800); }
  updatePetStatus(pet: Pet, status: string): void {
    if (pet.ownerId !== this.currentAccount().id || !this.petStatuses.includes(status as PetStatus)) return;
    pet.status = status as PetStatus; this.selectedPet.set({ ...pet }); this.showToast(`${pet.name}'s status was updated to ${status}.`);
  }
  submitListing(): void { this.showAddPet.set(false); this.showToast('Listing sent for barangay verification.'); }
  beginMessage(name: string): void {
    if (this.isBlocked(name)) { this.showToast('Unblock this resident before starting a new conversation.'); return; }
    this.page.set('message'); this.selectedPet.set(null); this.selectedUser.set(null);
    const index = this.conversations.findIndex((chat) => chat.name === name); this.activeChat.set(index >= 0 ? index : 0);
    this.showToast(`Conversation with ${name} opened.`);
  }
  sendMessage(): void {
    if (this.isBlocked(this.conversations[this.activeChat()].name)) { this.showToast('Unblock this resident before sending a message.'); return; }
    if (!this.newMessage.trim()) return;
    this.newMessage = ''; this.showToast('Message sent.');
  }
  startConversation(): void {
    const recipient = this.newRecipient;
    if (this.isBlocked(recipient)) { this.showToast('Unblock this resident before starting a new conversation.'); return; }
    let index = this.conversations.findIndex((chat) => chat.name === recipient);
    if (index < 0) {
      const user = this.users.find((item) => item.fullName === recipient);
      if (!user) return;
      this.conversations.push({ name: user.fullName, initials: user.initials, color: user.color, preview: 'Start a new conversation', time: 'Now', unread: 0, online: false });
      index = this.conversations.length - 1;
    }
    this.activeChat.set(index); this.showNewMessage.set(false); this.showToast(`New conversation with ${recipient} opened.`);
  }
  blockActiveConversation(): void {
    const chat = this.conversations[this.activeChat()];
    if (chat.ai) { this.showToast('Petlink Care AI is available only for pet health guidance.'); return; }
    const user = this.users.find((item) => item.fullName === chat.name);
    if (!user) return;
    if (this.blockedUserIds().includes(user.id)) { this.showToast(`${user.fullName} is already blocked.`); return; }
    this.blockedUserIds.update((ids) => [...ids, user.id]); this.showToast(`${user.fullName} was blocked.`);
  }
  unblockUser(id: number): void { this.blockedUserIds.update((ids) => ids.filter((item) => item !== id)); this.showToast('User unblocked.'); }
  getUser(id: number): (typeof this.users)[number] | undefined { return this.users.find((user) => user.id === id); }
  isBlocked(name: string): boolean {
    const user = this.users.find((item) => item.fullName === name);
    return !!user && this.blockedUserIds().includes(user.id);
  }
  deleteNotification(id: number): void { this.deletedNotificationIds.update((ids) => [...ids, id]); }
  resolveTransfer(decision: 'accepted' | 'denied'): void { this.criticalResolved.set(decision); this.showToast(`Transfer request ${decision}.`); }
  signIn(): void {
    const account = this.accounts.find((item) => item.username === this.loginUsername && item.password === this.loginPassword);
    if (!account) { this.loginError = 'Incorrect username or password.'; return; }
    this.currentAccount.set(account); this.loggedIn.set(true); this.loginError = ''; this.page.set('home');
  }
  useDemo(account: Account): void { this.loginUsername = account.username; this.loginPassword = account.password; }
  signOut(): void { this.loggedIn.set(false); this.mobileMenuOpen.set(false); }
}
