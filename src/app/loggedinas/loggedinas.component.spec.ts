import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinasComponent } from './loggedinas.component';

describe('LoggedinasComponent', () => {
  let component: LoggedinasComponent;
  let fixture: ComponentFixture<LoggedinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
