import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHamburguesaComponent } from './menu-hamburguesa.component';

describe('MenuHamburguesaComponent', () => {
  let component: MenuHamburguesaComponent;
  let fixture: ComponentFixture<MenuHamburguesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHamburguesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuHamburguesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
