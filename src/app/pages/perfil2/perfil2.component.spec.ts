import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil2Component } from './perfil2.component';

describe('Perfil2Component', () => {
  let component: Perfil2Component;
  let fixture: ComponentFixture<Perfil2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Perfil2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Perfil2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
