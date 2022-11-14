import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpurchasesComponent } from './userpurchases.component';

describe('UserpurchasesComponent', () => {
  let component: UserpurchasesComponent;
  let fixture: ComponentFixture<UserpurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpurchasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
