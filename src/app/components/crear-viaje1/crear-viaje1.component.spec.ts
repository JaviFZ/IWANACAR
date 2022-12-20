import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearViaje1Component } from './crear-viaje1.component';

describe('CrearViaje1Component', () => {
  let component: CrearViaje1Component;
  let fixture: ComponentFixture<CrearViaje1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearViaje1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearViaje1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
