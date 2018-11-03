import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFoodComponent } from './search-food.component';

describe('SearchFieldComponent', () => {
  let component: SearchFoodComponent;
  let fixture: ComponentFixture<SearchFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFoodComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
