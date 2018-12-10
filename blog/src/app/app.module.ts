import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MapComponent } from './components/map/map.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {Routes} from "@angular/router";
import {RouterModule} from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'nav-bar',
    component: NavBarComponent,
  }];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MapComponent,
    QuizComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


