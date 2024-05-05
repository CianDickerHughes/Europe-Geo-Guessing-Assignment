import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizEuropePage } from './quiz-europe.page';

describe('QuizEuropePage', () => {
  let component: QuizEuropePage;
  let fixture: ComponentFixture<QuizEuropePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizEuropePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
