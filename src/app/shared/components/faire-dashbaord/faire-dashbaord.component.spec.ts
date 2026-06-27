import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaireDashbaordComponent } from './faire-dashbaord.component';

describe('FaireDashbaordComponent', () => {
  let component: FaireDashbaordComponent;
  let fixture: ComponentFixture<FaireDashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaireDashbaordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaireDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
