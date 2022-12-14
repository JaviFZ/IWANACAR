import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirCocheComponent } from './anadir-coche.component';

describe('AnadirCocheComponent', () => {
  let component: AnadirCocheComponent;
  let fixture: ComponentFixture<AnadirCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirCocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnadirCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
