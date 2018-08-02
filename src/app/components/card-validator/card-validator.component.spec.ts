import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardValidatorComponent } from './card-validator.component';

describe('CardValidatorComponent', () => {
  let component: CardValidatorComponent;
  let fixture: ComponentFixture<CardValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
