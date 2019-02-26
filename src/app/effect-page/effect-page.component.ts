import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-effect-page',
  templateUrl: './effect-page.component.html',
  styleUrls: ['./effect-page.component.css']
})
export class EffectPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fadeHorizontal(){
    var toFadeOut = document.getElementById('fade-out-horizontal');
    var toFadeIn = document.getElementById('fade-in-horizontal');

    toFadeOut.classList.remove('margin-moveable-fast-opacity-medium');
    toFadeIn.classList.remove('margin-moveable-fast-opacity-medium');

    toFadeOut.style.marginLeft = "0";
    toFadeOut.style.opacity = "1";
    toFadeIn.style.marginLeft = "-300px";
    toFadeIn.style.opacity = "0";

    toFadeOut.classList.add('margin-moveable-fast-opacity-medium');
    toFadeIn.classList.add('margin-moveable-fast-opacity-medium');

    toFadeOut.style.marginLeft = "-300px";
    toFadeOut.style.opacity = "0";
    toFadeIn.style.marginLeft = "0";
    toFadeIn.style.opacity = "1";

    toFadeOut.setAttribute('id', 'fade-in-horizontal');
    toFadeIn.setAttribute('id', 'fade-out-horizontal');
  }

  fadeVertical(){
    var toFadeOut = document.getElementById('fade-out-vertical');
    var toFadeIn = document.getElementById('fade-in-vertical');

    toFadeOut.classList.remove('margin-moveable-fast-opacity-medium');
    toFadeIn.classList.remove('margin-moveable-fast-opacity-medium');

    toFadeOut.style.marginTop = "0";
    toFadeOut.style.opacity = "1";
    toFadeIn.style.marginTop = "300px";
    toFadeIn.style.opacity = "0";

    toFadeOut.classList.add('margin-moveable-fast-opacity-medium');
    toFadeIn.classList.add('margin-moveable-fast-opacity-medium');

    toFadeOut.style.marginTop = "300px";
    toFadeOut.style.opacity = "0";
    toFadeIn.style.marginTop = "0";
    toFadeIn.style.opacity = "1";

    toFadeOut.setAttribute('id', 'fade-in-vertical');
    toFadeIn.setAttribute('id', 'fade-out-vertical');
  }

  fadeOpacity(){
    var toFadeOut = document.getElementById('fade-out-opacity');
    var toFadeIn = document.getElementById('fade-in-opacity');

    toFadeOut.classList.remove('margin-moveable-fast-opacity-medium');
    toFadeIn.classList.remove('margin-moveable-fast-opacity-medium');

    toFadeOut.style.opacity = "1";
    toFadeIn.style.opacity = "0";

    toFadeOut.classList.add('margin-moveable-fast-opacity-medium');
    toFadeIn.classList.add('margin-moveable-fast-opacity-medium');

    toFadeOut.style.opacity = "0";
    toFadeIn.style.opacity = "1";

    toFadeOut.setAttribute('id', 'fade-in-opacity');
    toFadeIn.setAttribute('id', 'fade-out-opacity');
  }

}
