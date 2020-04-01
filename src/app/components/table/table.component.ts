import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() canDelete = true;

  @Input() list;
  @Output() deleteItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete(index) {
    this.deleteItem.emit(index);
  }

}
