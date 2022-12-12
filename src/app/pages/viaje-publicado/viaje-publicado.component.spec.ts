import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajePublicadoComponent } from './viaje-publicado.component';

describe('ViajePublicadoComponent', () => {
  let component: ViajePublicadoComponent;
  let fixture: ComponentFixture<ViajePublicadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajePublicadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajePublicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
