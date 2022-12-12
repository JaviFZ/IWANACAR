import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearViaje4Component } from './crear-viaje4.component';

describe('CrearViaje4Component', () => {
  let component: CrearViaje4Component;
  let fixture: ComponentFixture<CrearViaje4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearViaje4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearViaje4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
