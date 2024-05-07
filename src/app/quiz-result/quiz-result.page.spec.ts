import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizResultPage } from './quiz-result.page';

describe('QuizResultPage', () => {
  let component: QuizResultPage;
  let fixture: ComponentFixture<QuizResultPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
