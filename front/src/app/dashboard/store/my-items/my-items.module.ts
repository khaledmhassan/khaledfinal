import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyItemsComponent } from './my-items.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyItemsComponent, Ng2SmartTableModule,]
})
export class MyItemsModule { }
