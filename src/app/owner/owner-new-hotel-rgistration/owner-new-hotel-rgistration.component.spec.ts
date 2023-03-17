import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerNewHotelRgistrationComponent } from './owner-new-hotel-rgistration.component';

describe('OwnerNewHotelRgistrationComponent', () => {
  let component: OwnerNewHotelRgistrationComponent;
  let fixture: ComponentFixture<OwnerNewHotelRgistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerNewHotelRgistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerNewHotelRgistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
