import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoViajesComponent } from './historico-viajes.component';

describe('HistoricoViajesComponent', () => {
  let component: HistoricoViajesComponent;
  let fixture: ComponentFixture<HistoricoViajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoViajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
