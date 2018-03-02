import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@Component({
  selector: 'app-my-items',
  template: `<ng2-smart-table [settings]="settings" [source]="data" (deleteConfirm)="onDeleteConfirm($event)"></ng2-smart-table>`,
  styleUrls: ['./my-items.component.scss']
})
export class MyItemsComponent implements OnInit {

  settings = {delete: {confirmDelete:true},
    columns: {
      
      name: {
        title: 'Full Name'
      },
      price: {
        title: 'Price'
      },
      createdAt: {
        title: 'Created At'
      },
      updatedAt: {
        title: 'Updated At'
      },
      sellerName: {
        title: 'Seller Name'
      },
      componentNomber: {
        title: 'Component Number'
      }
    }
  };
  data = [
    {
      name: "computer",
      price: 5000,
      createdAt: 4/3/2017,
      updatedAt: 5/5/2017,
      sellerName: "yara",
      componentNomber: "c1",    
    
    },
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
