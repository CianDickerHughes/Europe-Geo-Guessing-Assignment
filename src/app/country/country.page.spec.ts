import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryPage } from './country.page';

describe('CountryPage', () => {
  let component: CountryPage;
  let fixture: ComponentFixture<CountryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
