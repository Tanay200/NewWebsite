import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: BusinessComponent }];


@NgModule({
  declarations: [
    BusinessComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BusinessModule { }
