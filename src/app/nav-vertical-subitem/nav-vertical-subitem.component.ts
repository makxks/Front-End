import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-vertical-subitem',
  templateUrl: './nav-vertical-subitem.component.html',
  styleUrls: ['./nav-vertical-subitem.component.css']
})
export class NavVerticalSubitemComponent implements OnInit {
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
