import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypingDashboardComponent } from './typing-dashboard/typing-dashboard.component';
import { SampleDashboardComponent } from './sample-dashboard/sample-dashboard.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TypingDashboardComponent,
    SampleDashboardComponent,
    LoadingComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
