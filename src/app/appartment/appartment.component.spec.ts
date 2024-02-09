import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartmentComponent } from './appartment.component';

describe('AppartmentComponent', () => {
  let component: AppartmentComponent;
  let fixture: ComponentFixture<AppartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
