import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypingDashboardComponent } from './typing-dashboard/typing-dashboard.component';
import { SampleDashboardComponent } from './sample-dashboard/sample-dashboard.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    TypingDashboardComponent,
    SampleDashboardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
