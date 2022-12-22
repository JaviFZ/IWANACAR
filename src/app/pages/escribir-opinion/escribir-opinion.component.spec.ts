import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscribirOpinionComponent } from './escribir-opinion.component';

describe('EscribirOpinionComponent', () => {
  let component: EscribirOpinionComponent;
  let fixture: ComponentFixture<EscribirOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscribirOpinionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscribirOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
