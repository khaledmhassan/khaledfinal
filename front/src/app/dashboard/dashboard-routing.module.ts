import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {MyItemsComponent} from './store/my-items/my-items.component';
import { ItemsComponent } from './items/items.component';
import { StoreComponent } from './store/store.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
   
  children:[{
    path:'items',
    component:ItemsComponent
  },
 
  {
    path:'store',
    component:StoreComponent
  },
    {
path:'my-items',
component:MyItemsComponent


    
  }
  

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
