import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarViajeComponent } from './buscar-viaje.component';

describe('BuscarViajeComponent', () => {
  let component: BuscarViajeComponent;
  let fixture: ComponentFixture<BuscarViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarViajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
