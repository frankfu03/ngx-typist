import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDashboardComponent } from './sample-dashboard.component';

describe('SampleDashboardComponent', () => {
  let component: SampleDashboardComponent;
  let fixture: ComponentFixture<SampleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
