import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoChatsComponent } from './historico-chats.component';

describe('HistoricoChatsComponent', () => {
  let component: HistoricoChatsComponent;
  let fixture: ComponentFixture<HistoricoChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoChatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
