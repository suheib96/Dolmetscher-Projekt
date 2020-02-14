import { Component, OnInit } from '@angular/core';

declare function nightModeMethode():any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {


  otherTheme = true;

  constructor() {}

  ngOnInit() {
    nightModeMethode();
  }

  changeTheme(){
    this.otherTheme = !this.otherTheme;
  }
  
  
}
