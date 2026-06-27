import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairesDetailsComponent } from './faires-details.component';

describe('FairesDetailsComponent', () => {
  let component: FairesDetailsComponent;
  let fixture: ComponentFixture<FairesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
