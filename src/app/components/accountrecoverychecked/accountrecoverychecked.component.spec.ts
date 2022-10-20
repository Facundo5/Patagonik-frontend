import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountrecoverycheckedComponent } from './accountrecoverychecked.component';

describe('AccountrecoverycheckedComponent', () => {
  let component: AccountrecoverycheckedComponent;
  let fixture: ComponentFixture<AccountrecoverycheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountrecoverycheckedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountrecoverycheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
