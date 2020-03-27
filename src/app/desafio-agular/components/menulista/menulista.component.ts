import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menulista',
  templateUrl: './menulista.component.html',
  styleUrls: ['./menulista.component.css']
})
export class MenulistaComponent implements OnInit {

  constructor() { }

@Input() item;

  ngOnInit() {
    console.log(this.item);
  }

}
