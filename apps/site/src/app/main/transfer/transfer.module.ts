import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './transfer.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TransferComponent }
    ])
  ],
  declarations: [TransferComponent]
})
export class TransferModule { }
