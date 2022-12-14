import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesPublicadosComponent } from './viajes-publicados.component';

describe('ViajesPublicadosComponent', () => {
  let component: ViajesPublicadosComponent;
  let fixture: ComponentFixture<ViajesPublicadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajesPublicadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajesPublicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
