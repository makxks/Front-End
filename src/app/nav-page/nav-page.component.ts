import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-page',
  templateUrl: './nav-page.component.html',
  styleUrls: ['./nav-page.component.css']
})
export class NavPageComponent implements OnInit {

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
