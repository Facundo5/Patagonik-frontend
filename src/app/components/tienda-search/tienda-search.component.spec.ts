import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaSearchComponent } from './tienda-search.component';

describe('TiendaSearchComponent', () => {
  let component: TiendaSearchComponent;
  let fixture: ComponentFixture<TiendaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
