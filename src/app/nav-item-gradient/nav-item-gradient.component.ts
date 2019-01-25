import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-item-gradient',
  templateUrl: './nav-item-gradient.component.html',
  styleUrls: ['./nav-item-gradient.component.css']
})
export class NavItemGradientComponent implements OnInit {
  @Input() smooth: boolean;
  @Input() itemname: string;
  @Input() itemstyle: string;
  @Input() fadespeed: string;
  @Input() colorfadespeed: string;
  @Input() fadetocolortext: string;
  @Input() subitems: any[] = [];

  originalColor: string = '';

  constructor() { }

  ngOnInit() {

  }

  public mouseOverNavGradient(event: any){
    this.originalColor = event.target.children[0].style.color;
    event.target.children[0].style.color = this.fadetocolortext;
    event.target.children[1].style.opacity = 1;

    if(event.target.children.length > 2){
      var subitem = event.target.children[2];
      subitem.style.marginTop = "0";
      subitem.style.opacity = "1";
    }
  }

  public mouseOutNavGradient(event: any){
    event.target.children[0].style.color = this.originalColor;
    event.target.children[1].style.opacity = 0;

    if(event.target.children.length > 2){
      var subitem = event.target.children[2];
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

  setFadeSpeed(){
    var fadeablevfast;
    var fadeablefast;
    var fadeablemedium;
    var fadeableslow;
    var fadeablevslow;

    if(this.fadespeed == "vslow"){
      fadeablevfast = false;
      fadeablefast = false;
      fadeablemedium = false;
      fadeableslow = false;
      fadeablevslow = true;
    }
    else if (this.fadespeed == "slow"){
      fadeablevfast = false;
      fadeablefast = false;
      fadeablemedium = false;
      fadeableslow = true;
      fadeablevslow = false;
    }
    else if (this.fadespeed == "medium"){
      fadeablevfast = false;
      fadeablefast = false;
      fadeablemedium = true;
      fadeableslow = false;
      fadeablevslow = false;
    }
    else if (this.fadespeed == "fast"){
      fadeablevfast = false;
      fadeablefast = true;
      fadeablemedium = false;
      fadeableslow = false;
      fadeablevslow = false;
    }
    else if (this.fadespeed == "vfast"){
      fadeablevfast = false;
      fadeablefast = false;
      fadeablemedium = false;
      fadeableslow = false;
      fadeablevslow = true;
    }

    return {
      'fadeable-vfast': fadeablevfast,
      'fadeable-fast': fadeablefast,
      'fadeable-medium': fadeablemedium,
      'fadeable-slow': fadeableslow,
      'fadeable-vslow': fadeablevslow
    }
  }

}
