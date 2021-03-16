import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PropertyThumbnailComponent } from './property-thumbnail.component';

describe('PropertyThumbnailComponent', () => {
  let component: PropertyThumbnailComponent;
  let fixture: ComponentFixture<PropertyThumbnailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
