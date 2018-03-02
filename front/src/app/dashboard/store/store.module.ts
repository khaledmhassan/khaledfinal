import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreService } from './store.service';


@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
  declarations: [],
  providers:[StoreService]
})
export class StoreModule { }
