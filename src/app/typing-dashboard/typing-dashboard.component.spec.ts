import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingDashboardComponent } from './typing-dashboard.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { TimerComponent } from './../timer/timer.component';

describe('TypingDashboardComponent', () => {
  let component: TypingDashboardComponent;
  let fixture: ComponentFixture<TypingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TypingDashboardComponent,
        LoadingComponent,
        TimerComponent,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
