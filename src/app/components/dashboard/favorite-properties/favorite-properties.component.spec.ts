import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FavoritePropertiesComponent } from './favorite-properties.component';

describe('FavoritePropertiesComponent', () => {
  let component: FavoritePropertiesComponent;
  let fixture: ComponentFixture<FavoritePropertiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
