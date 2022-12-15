import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaChatComponent } from './tarjeta-chat.component';

describe('TarjetaChatComponent', () => {
  let component: TarjetaChatComponent;
  let fixture: ComponentFixture<TarjetaChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
