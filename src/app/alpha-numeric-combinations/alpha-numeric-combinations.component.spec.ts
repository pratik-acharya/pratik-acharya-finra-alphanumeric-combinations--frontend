import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaNumericCombinationsComponent } from './alpha-numeric-combinations.component';

describe('AlphaNumericCombinationsComponent', () => {
  let component: AlphaNumericCombinationsComponent;
  let fixture: ComponentFixture<AlphaNumericCombinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphaNumericCombinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaNumericCombinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
