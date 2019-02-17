import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventItemComponent } from './edit-event-item.component';

describe('EditEventItemComponent', () => {
  let component: EditEventItemComponent;
  let fixture: ComponentFixture<EditEventItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
