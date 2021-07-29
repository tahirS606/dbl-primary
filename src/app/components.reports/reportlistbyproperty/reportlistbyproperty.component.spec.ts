import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportlistbypropertyComponent } from './reportlistbyproperty.component';

describe('ReportlistbypropertyComponent', () => {
  let component: ReportlistbypropertyComponent;
  let fixture: ComponentFixture<ReportlistbypropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportlistbypropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportlistbypropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
