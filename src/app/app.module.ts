import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { GeneralStatsComponent } from './general-stats/general-stats.component';
import { OngoingProjectsComponent } from './ongoing-projects/ongoing-projects.component';
import { IndexComponent } from './index/index.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GeneralStatsComponent,
    OngoingProjectsComponent,
    IndexComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
