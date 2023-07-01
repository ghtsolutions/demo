import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerComponent } from './buyer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: BuyerComponent }
    ])
  ],
  declarations: [BuyerComponent]
})
export class BuyerModule { }
