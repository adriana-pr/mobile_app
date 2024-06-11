import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MyRecipeDetailsPage } from './my-recipe-details.page';

describe('MyRecipeDetailsPage', () => {
  let component: MyRecipeDetailsPage;
  let fixture: ComponentFixture<MyRecipeDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyRecipeDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
