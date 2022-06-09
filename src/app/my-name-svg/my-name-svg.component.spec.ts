import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNameSVGComponent } from './my-name-svg.component';

describe('MyNameSVGComponent', () => {
  let component: MyNameSVGComponent;
  let fixture: ComponentFixture<MyNameSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNameSVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNameSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
