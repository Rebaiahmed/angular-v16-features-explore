import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredInputsParentComponent } from './required-inputs-parent.component';

describe('RequiredInputsParentComponent', () => {
  let component: RequiredInputsParentComponent;
  let fixture: ComponentFixture<RequiredInputsParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequiredInputsParentComponent]
    });
    fixture = TestBed.createComponent(RequiredInputsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
