import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  public theme: string = "light";

  constructor() {
  }

  switchTheme(){
    if(this.theme == "light"){
      this.theme = "dark";

      var body = document.getElementById("body");
      body.classList.add("dark");

    }
    else if(this.theme == "dark"){
      this.theme = "light";

      var body = document.getElementById("body");
      body.classList.remove("dark");
      
    }
  }


}
