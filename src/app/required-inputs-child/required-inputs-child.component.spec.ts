import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredInputsChildComponent } from './required-inputs-child.component';

describe('RequiredInputsChildComponent', () => {
  let component: RequiredInputsChildComponent;
  let fixture: ComponentFixture<RequiredInputsChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequiredInputsChildComponent]
    });
    fixture = TestBed.createComponent(RequiredInputsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
