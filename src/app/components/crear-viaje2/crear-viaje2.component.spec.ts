import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearViaje2Component } from './crear-viaje2.component';

describe('CrearViaje2Component', () => {
  let component: CrearViaje2Component;
  let fixture: ComponentFixture<CrearViaje2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearViaje2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearViaje2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
