import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsAbiertosComponent } from './chats-abiertos.component';

describe('ChatsAbiertosComponent', () => {
  let component: ChatsAbiertosComponent;
  let fixture: ComponentFixture<ChatsAbiertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsAbiertosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsAbiertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
