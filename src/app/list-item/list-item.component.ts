import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() subitems: any[] = [];
  @Input() itemname: string = "";
  @Input() itemstyle: string = "";
  @Input() subliststyle: string = "";
  @Input() subitemstyle: string = "";
  @Input() hoverable: boolean = false;
  @Input() isPartial: boolean = false;
  @Input() buttonStyle: string = "triangle";

  constructor() { }

  ngOnInit() {
  }

  toggleSubitems(event: any){
    var subitems = event.target.parentElement.nextSibling.children[0].children;
    var marginTop = "0px";
    var target = "0";
    if(subitems.length > 0){
      if(subitems[0].style.marginTop == marginTop){
        target = "-32px";
        event.target.style.transform = "rotate(0deg)";
      }
      else {
        target = "0";
        event.target.style.transform = "rotate(90deg)";
      }
    }
    for(var i=0; i<subitems.length; i++){
      subitems[i].style.marginTop = target;
    }
  }

  toggleSubitemsPartial(event: any){
    var subitems = event.target.parentElement.nextSibling.children[0].children;
    var marginTop = "0px";
    var target = "0";
    if(subitems.length > 0){
      if(subitems[0].style.marginTop == marginTop){
        target = "-25px";
        event.target.style.transform = "rotate(0deg)";
      }
      else {
        target = "0";
        event.target.style.transform = "rotate(90deg)";
      }
    }
    for(var i=0; i<subitems.length; i++){
      subitems[i].style.marginTop = target;
    }
  }

  toggleSubitemsHover(event: any){
    var subitems = event.target.nextSibling.children[0].children;
    var marginTop = "0px";
    var target = "0";
    if(subitems.length > 0){
      if(subitems[0].style.marginTop == marginTop){
        target = "-32px";
      }
      else {
        target = "0";
      }
    }
    for(var i=0; i<subitems.length; i++){
      subitems[i].style.marginTop = target;
    }
  }

  toggleSubitemsHoverPartial(event: any){
    var subitems = event.target.nextSibling.children[0].children;
    var marginTop = "0px";
    var target = "0";
    if(subitems.length > 0){
      if(subitems[0].style.marginTop == marginTop){
        target = "-25px";
      }
      else {
        target = "0";
      }
    }
    for(var i=0; i<subitems.length; i++){
      subitems[i].style.marginTop = target;
    }
  }

}
