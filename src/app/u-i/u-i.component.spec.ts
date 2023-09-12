import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIComponent } from './u-i.component';

describe('UIComponent', () => {
  let component: UIComponent;
  let fixture: ComponentFixture<UIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UIComponent]
    });
    fixture = TestBed.createComponent(UIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
