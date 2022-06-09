import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTextElementsComponent } from './nav-text-elements.component';

describe('NavTextElementsComponent', () => {
  let component: NavTextElementsComponent;
  let fixture: ComponentFixture<NavTextElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTextElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTextElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
