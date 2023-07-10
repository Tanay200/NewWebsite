import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PoliticsComponent } from './politics/politics.component';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { BusinessComponent } from './business/business.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'politics',component:PoliticsComponent},
  {path:'sports',component:SportsComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'business',component:BusinessComponent},
  {path:'world',component:WorldComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
