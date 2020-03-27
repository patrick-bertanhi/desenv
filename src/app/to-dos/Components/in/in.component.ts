import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.css']
})

export class InComponent implements OnInit {

  toDolist: Array<any> = [];
  item;
  id = 0;

  constructor() { }

  ngOnInit() {
  }

  onClickBtnAdd(){
      const tarefa = {
        'id': this.id,
        'tarefa': this.item,
        isChecked: false
      };
      this.toDolist.push(tarefa);
      this.item = '';
  }
}

