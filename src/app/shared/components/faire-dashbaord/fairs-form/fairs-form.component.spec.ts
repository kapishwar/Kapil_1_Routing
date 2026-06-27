import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairsFormComponent } from './fairs-form.component';

describe('FairsFormComponent', () => {
  let component: FairsFormComponent;
  let fixture: ComponentFixture<FairsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
