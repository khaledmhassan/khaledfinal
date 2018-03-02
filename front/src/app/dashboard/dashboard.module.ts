import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { StoreComponent } from './store/store.component';
import {MyItemsComponent} from './store/my-items/my-items.component';
import{ItemsComponent} from './items/items.component';
import { StoreService } from './store/store.service';

@NgModule({
  imports: [ThemeModule, DashboardRoutingModule],
  declarations: [DashboardComponent, StoreComponent,MyItemsComponent,ItemsComponent],
  entryComponents: [],
  providers: [StoreService]
})
export class DashboardModule {}
