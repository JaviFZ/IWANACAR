import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearViaje3Component } from './crear-viaje3.component';

describe('CrearViaje3Component', () => {
  let component: CrearViaje3Component;
  let fixture: ComponentFixture<CrearViaje3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearViaje3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearViaje3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
