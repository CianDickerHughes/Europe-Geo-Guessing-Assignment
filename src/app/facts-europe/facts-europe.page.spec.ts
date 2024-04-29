import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FactsEuropePage } from './facts-europe.page';

describe('FactsEuropePage', () => {
  let component: FactsEuropePage;
  let fixture: ComponentFixture<FactsEuropePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsEuropePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
