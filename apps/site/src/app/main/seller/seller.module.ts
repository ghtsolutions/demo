import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerComponent } from './seller.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: SellerComponent }
    ])
  ],
  declarations: [SellerComponent]
})
export class SellerModule { }
