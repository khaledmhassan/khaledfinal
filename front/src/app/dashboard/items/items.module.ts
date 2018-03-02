import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {CommonModule} from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreService } from '../store/store.service';
import { ItemsService } from './items.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';



@NgModule({
  imports: [CommonModule,ThemeModule, ItemsRoutingModule, Ng2SmartTableModule,HttpModule,HttpClientModule],
  declarations: [ItemsComponent],
  providers: [ItemsService]
})
export class ItemsModule {}
