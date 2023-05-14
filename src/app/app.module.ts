import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AppComponent } from './app.component';

import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { HabilitiesComponent } from './components/habilities/habilities.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RecentProjectsComponent } from './components/recent-projects/recent-projects.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    FooterComponent,
    HabilitiesComponent,
    HeaderComponent,
    NavBarComponent,
    RecentProjectsComponent,
    MainPageComponent,
    LoginPageComponent,
    AdminPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
