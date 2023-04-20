import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecordOnsiteComponent } from './admin-record-onsite.component';

describe('AdminRecordOnsiteComponent', () => {
  let component: AdminRecordOnsiteComponent;
  let fixture: ComponentFixture<AdminRecordOnsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRecordOnsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRecordOnsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
