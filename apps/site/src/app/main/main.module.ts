import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: MainComponent,
        children: [
          { path: '', component: ListComponent },
          { path: ':id', component: DetailComponent }]
      },
    ])
  ],
  declarations: [MainComponent, ListComponent, DetailComponent]
})
export class MainModule { }
