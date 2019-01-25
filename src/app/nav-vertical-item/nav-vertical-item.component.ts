import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-vertical-item',
  templateUrl: './nav-vertical-item.component.html',
  styleUrls: ['./nav-vertical-item.component.css']
})
export class NavVerticalItemComponent implements OnInit {
  @Input() subitems: any[];
  @Input() itemname: string;
  @Input() itemstyle: string;

  constructor() { }

  ngOnInit() {
  }

  public mouseOverVerticalSubsMove(event: any){
    for(var i=0; i < event.target.children.length; i++){
      event.target.children[i].style.marginLeft = "100%";
      event.target.children[i].style.opacity = "1";
    }
  }

  public mouseLeaveVerticalSubsMove(event: any){
    for(var i=0; i < event.target.children.length; i++){
      event.target.children[i].style.marginLeft = "0";
      event.target.children[i].style.opacity = "0";
    }
  }

}
