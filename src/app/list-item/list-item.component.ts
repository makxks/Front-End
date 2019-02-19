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
  @Input() buttonTriangle: boolean = false;
  @Input() buttonCircle: boolean = false;

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
        if(this.buttonTriangle){
          event.target.style.transform = "rotate(0deg)";
        }
        else if(this.buttonCircle){
          event.target.style.borderWidth = "10px";
          event.target.style.width = "0";
          event.target.style.height = "0";
        }
      }
      else {
        target = "0";
        if(this.buttonTriangle){
          event.target.style.transform = "rotate(90deg)";
        }
        else if(this.buttonCircle){
          event.target.style.borderWidth = "1px";
          event.target.style.width = "20px";
          event.target.style.height = "20px";
        }
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
        if(this.buttonTriangle){
          event.target.style.transform = "rotate(0deg)";
        }
        else if(this.buttonCircle){
          event.target.style.borderWidth = "10px";
          event.target.style.width = "0px";
          event.target.style.height = "0px";
        }
      }
      else {
        target = "0";
        if(this.buttonTriangle){
          event.target.style.transform = "rotate(90deg)";
        }
        else if(this.buttonCircle){
          event.target.style.borderWidth = "1px";
          event.target.style.width = "20px";
          event.target.style.height = "20px";
        }
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
