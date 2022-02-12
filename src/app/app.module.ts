import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskBarComponent } from './task-bar/task-bar.component';
import { MainComponent } from './main/main.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { InfoComponent } from './info/info.component';
import { SputnikComponent } from './info/sputnik/sputnik.component';
import { CosmosPollutionComponent } from './info/cosmos-pollution/cosmos-pollution.component';
import { UnsafetyComponent } from './info/unsafety/unsafety.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskBarComponent,
    MainComponent,
    FeedbackComponent,
    InfoComponent,
    SputnikComponent,
    CosmosPollutionComponent,
    UnsafetyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
