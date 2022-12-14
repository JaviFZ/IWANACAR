import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCochesComponent } from './mis-coches.component';

describe('MisCochesComponent', () => {
  let component: MisCochesComponent;
  let fixture: ComponentFixture<MisCochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisCochesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
