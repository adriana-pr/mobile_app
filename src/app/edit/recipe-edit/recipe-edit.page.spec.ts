import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RecipeEditPage } from './recipe-edit.page';

describe('RecipeEditPage', () => {
  let component: RecipeEditPage;
  let fixture: ComponentFixture<RecipeEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecipeEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
