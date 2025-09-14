import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarList } from './navbar-list';

describe('NavbarList', () => {
  let component: NavbarList;
  let fixture: ComponentFixture<NavbarList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
