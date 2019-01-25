import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-subitem',
  templateUrl: './nav-subitem.component.html',
  styleUrls: ['./nav-subitem.component.css']
})
export class NavSubitemComponent implements OnInit {

  @Input() itemname: string;
  @Input() itemstyle: string;
  @Input() route: string = "";

  constructor() { }

  ngOnInit() {
  }

  makeRoute(){
    var route = "/" + this.route;
    return route;
  }

}
