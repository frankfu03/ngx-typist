import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FooterComponent} from './shared/footer/footer.component';
import { SampleDashboardComponent } from './sample-dashboard/sample-dashboard.component';
import { TypingDashboardComponent } from './typing-dashboard/typing-dashboard.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { TimerComponent } from '././timer/timer.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent,
        FooterComponent,
        LoadingComponent,
        SampleDashboardComponent,
        TimerComponent,
        ToolbarComponent,
        TypingDashboardComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as an application title 'ngx typist'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.appTitle).toEqual('ngx typist');
  });
});
