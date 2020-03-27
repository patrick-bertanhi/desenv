import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Input() toDolist;

N = 1;

  constructor() { }

  ngOnInit() {
  }
  deleteItem(i){
    this.toDolist.splice(i,this.N);
  }
  deletarItem(){
    let newlist = [];
    this.toDolist.forEach((listItem) => {
    if  (!listItem.isChecked) {
    newlist.push(listItem);
}
    });
    this.toDolist = newlist;
  } 

 
}
