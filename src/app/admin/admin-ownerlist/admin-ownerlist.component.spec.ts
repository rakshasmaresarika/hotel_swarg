import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOwnerlistComponent } from './admin-ownerlist.component';

describe('AdminOwnerlistComponent', () => {
  let component: AdminOwnerlistComponent;
  let fixture: ComponentFixture<AdminOwnerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOwnerlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOwnerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
