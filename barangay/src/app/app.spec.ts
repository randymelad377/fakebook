import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('creates the Petlink admin application', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows city-wide admin analytics and priority actions', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const content = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(content).toContain('Good morning, Andrea.');
    expect(content).toContain('Pending verifications');
    expect(content).toContain('Recent admin activity');
  });

  it('limits barangay administrators to their assigned barangay', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.setRole('Barangay Admin');
    expect(app.visiblePets().length).toBeGreaterThan(0);
    expect(app.visiblePets().every((pet) => pet.barangay === 'Carig Norte')).toBe(true);
    expect(app.visibleUsers().every((user) => user.barangay === 'Carig Norte')).toBe(true);
  });

  it('searches pets using only the selected pet field', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.petSearchBy.set('breed');
    app.petSearch.set('beagle');
    expect(app.visiblePets().map((pet) => pet.name)).toEqual(['Biscuit']);
  });

  it('records listing status updates in the working data', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.updatePetStatus(app.pets[0], 'Verified');
    expect(app.pets[0].listingStatus).toBe('Verified');
  });
});
