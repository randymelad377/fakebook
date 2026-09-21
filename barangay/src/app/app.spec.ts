import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('creates the Petlink application', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows verified pets without exposing a pending status', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const content = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(content).toContain('Pets that need your attention');
    expect(content).toContain('Verified');
    expect(content.toLowerCase()).not.toContain('pending');
  });

  it('only allows the owner to update a pet status', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const ownedPet = app.pets[0];
    const anotherPet = app.pets[1];
    app.updatePetStatus(ownedPet, 'Rehomed');
    app.updatePetStatus(anotherPet, 'Returned');
    expect(ownedPet.status).toBe('Rehomed');
    expect(anotherPet.status).toBe('Lost');
  });
});
