import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {ItemsService} from './items.service';



@Component({
  selector: 'app-dashboard-items',
  template:'<ng2-smart-table [settings]="settings" [source]="Products" (editConfirm)="update($event)" (createConfirm)="create($event)" (deleteConfirm)="delete($event)"></ng2-smart-table>'
,  providers: [ItemsService]
})
export class ItemsComponent implements OnInit {
  Products;
  //private ItemsService:ItemsService;
  constructor(private ItemsService:ItemsService ){

  }
  settings = {delete: {confirmDelete:true},
  edit:{confirmSave:true},
  add:{confirmCreate:true},
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
      username: {
        title: 'Seller Name'
      },
      componentNo: {
        title: 'Component Number'
      }
    }
  };
  data = [
    {
      name: "Camera",
      price: 5066,
      createdAt: 16/2/2018,
      updatedAt: 5/5/2018,
      username:"yara",
      componentNo: "c1",    
    
    },
    
  ];
  ngOnInit(){
  
    this.ItemsService.getProducts().subscribe(
      (res:any)=>{
        this.Products=res.data;
        console.log(res);
      }
    )
  }

  update(event){
    var id = event.data._id
    var data = {"name" : event.newData.name,
    "price" : event.newData.price,
    "createdAt" : event.newData.createdAt,
    "updatedAt": event.newData.updatedAt,
    "username": event.newData.username,
    "componentNo": event.newData.componentNo
    };
this.ItemsService.updateProduct(id,data).subscribe(
res => {
console.log(res);
event.confirm.resolve(event.newData);
}


) }

create(event) {
var data = {"name" : event.newData.name,
            "price" : event.newData.price,
            "createdAt" : event.newData.createdAt,
            "updatedAt": event.newData.updatedAt,
            "username": event.newData.username,
            "componentNo": event.newData.componentNo
            };
  this.ItemsService.createProduct(data).subscribe(
    res => {
      console.log(res);
      event.confirm.resolve(event.newData);
  }
)
}


delete(event) {
var id = event.data._id
    this.ItemsService.deleteProduct(id).subscribe(
    res => {
      console.log(res);
      event.confirm.resolve(event.source.Data);
  }
)
}
}

