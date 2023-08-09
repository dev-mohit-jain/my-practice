import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavUserComponent } from './fav-user.component';

describe('FavUserComponent', () => {
  let component: FavUserComponent;
  let fixture: ComponentFixture<FavUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavUserComponent]
    });
    fixture = TestBed.createComponent(FavUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
