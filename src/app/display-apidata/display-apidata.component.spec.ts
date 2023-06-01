import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAPIdataComponent } from './display-apidata.component';

describe('DisplayAPIdataComponent', () => {
  let component: DisplayAPIdataComponent;
  let fixture: ComponentFixture<DisplayAPIdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAPIdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAPIdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
