import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookhotelComponent } from './user-bookhotel.component';

describe('UserBookhotelComponent', () => {
  let component: UserBookhotelComponent;
  let fixture: ComponentFixture<UserBookhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBookhotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBookhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
