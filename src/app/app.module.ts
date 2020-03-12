import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';

import {FlexLayoutModule} from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { ProblemComponent } from './problem/problem.component';
import { PlanningComponent } from './planning/planning.component';
import { DevelopmentComponent } from './development/development.component';
import { ResultsComponent } from './results/results.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProblemComponent,
    PlanningComponent,
    DevelopmentComponent,
    ResultsComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatExpansionModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
