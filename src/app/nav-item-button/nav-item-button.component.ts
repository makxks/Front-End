import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-item-button',
  templateUrl: './nav-item-button.component.html',
  styleUrls: ['./nav-item-button.component.css']
})
export class NavItemButtonComponent implements OnInit {
  @Input() itemname: string;
  @Input() subitems: any[] = [];

  originalColor: string = '';

  constructor() { }

  ngOnInit() {
  }

  public mouseOverNavFade(event: any){
    if(event.target.children.length > 1){
      var subitem = event.target.children[1];
      subitem.style.marginTop = "0";
      subitem.style.opacity = "1";
    }
  }

  public mouseOutNavFade(event: any){
    if(event.target.children.length > 1){
      var subitem = event.target.children[1];
      subitem.style.marginTop = "-100%";
      subitem.style.opacity = "0";
    }
  }

}
