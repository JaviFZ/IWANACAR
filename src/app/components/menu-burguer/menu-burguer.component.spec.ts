import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBurguerComponent } from './menu-burguer.component';

describe('MenuBurguerComponent', () => {
  let component: MenuBurguerComponent;
  let fixture: ComponentFixture<MenuBurguerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBurguerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBurguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
