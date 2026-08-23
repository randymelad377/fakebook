import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMainLayout } from './user-main-layout';

describe('UserMainLayout', () => {
  let component: UserMainLayout;
  let fixture: ComponentFixture<UserMainLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMainLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(UserMainLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
