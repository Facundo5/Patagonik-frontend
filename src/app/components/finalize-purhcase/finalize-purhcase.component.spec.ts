import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizePurhcaseComponent } from './finalize-purhcase.component';

describe('FinalizePurhcaseComponent', () => {
  let component: FinalizePurhcaseComponent;
  let fixture: ComponentFixture<FinalizePurhcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizePurhcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizePurhcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
