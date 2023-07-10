import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeadlinesService } from './service/headlines.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusinessComponent } from './business/business.component';
import { WorldComponent } from './world/world.component';
import { RouterModule } from '@angular/router';
import { PoliticsComponent } from './politics/politics.component';
import { SportsComponent } from './sports/sports.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BusinessComponent,
    WorldComponent,
    PoliticsComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [HeadlinesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
