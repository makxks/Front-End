import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-item-standard',
  templateUrl: './nav-item-standard.component.html',
  styleUrls: ['./nav-item-standard.component.css']
})
export class NavItemStandardComponent implements OnInit {
  @Input() smooth: boolean;
  @Input() itemname: string;
  @Input() itemstyle: string;
  @Input() colorfadespeed: string;
  @Input() fadetocolortext: string;
  @Input() subitems: any[] = [];

  originalColor: string = '';

  constructor() { }

  ngOnInit() {
  }

  public mouseOverNavFade(event: any){
    this.originalColor = event.target.children[0].style.color;
    event.target.children[0].style.color = this.fadetocolortext;
    if(event.target.children.length > 1){
      var subitem = event.target.children[1];
      subitem.style.marginTop = "0";
      subitem.style.opacity = "1";
    }
  }

  public mouseOutNavFade(event: any){
    event.target.children[0].style.color = this.originalColor;
    if(event.target.children.length > 1){
      var subitem = event.target.children[1];
      subitem.style.marginTop = "-100%";
      subitem.style.opacity = "0";
    }
  }

  setClasses(){
    var rectangle;
    var parallelogram;
    var smooth;

    if(this.smooth == true){
      smooth = true;
    }
    else {
      smooth = false;
    }

    if(this.itemstyle == 'rectangle'){
      rectangle = true;
      parallelogram = false;
    }
    else if(this.itemstyle == 'parallelogram'){
      rectangle = false;
      parallelogram = true;
    }

    return {
      'rectangle': rectangle,
      'parallelogram': parallelogram,
      'smooth': smooth
    }
  }

  setColorFadeSpeed(){
    var colorfadevslow;
    var colorfadeslow;
    var colorfade;
    var colorfadefast;
    var colorfadevfast;

    if(this.colorfadespeed == 'vslow'){
      colorfadevslow = true;
      colorfadeslow = false;
      colorfade = false;
      colorfadefast = false;
      colorfadevfast = false;
    }
    else if(this.colorfadespeed == 'slow'){
      colorfadevslow = false;
      colorfadeslow = true;
      colorfade = false;
      colorfadefast = false;
      colorfadevfast = false;
    }
    else if(this.colorfadespeed == 'medium'){
      colorfadevslow = false;
      colorfadeslow = false;
      colorfade = true;
      colorfadefast = false;
      colorfadevfast = false;
    }
    else if(this.colorfadespeed == 'fast'){
      colorfadevslow = false;
      colorfadeslow = false;
      colorfade = false;
      colorfadefast = true;
      colorfadevfast = false;
    }
    else if(this.colorfadespeed == 'vfast'){
      colorfadevslow = false;
      colorfadeslow = false;
      colorfade = false;
      colorfadefast = false;
      colorfadevfast = true;
    }

    return {
      'color-fade-vslow': colorfadevslow,
      'color-fade-slow': colorfadeslow,
      'color-fade-medium': colorfade,
      'color-fade-fast': colorfadefast,
      'color-fade-vfast': colorfadevfast
    }
  }
}
