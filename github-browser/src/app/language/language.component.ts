import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  zeigDe = false;
  zeigEn = false;
  zeigAfg = false;
  zeigUr = false;
  zeigPe = false;

  kürzel: string;
  constructor() { }

  ngOnInit() {
  }
  filterSelection(kürzel) {
    if (kürzel === "de") {
      this.zeigDe = !this.zeigDe
      this.zeigEn = false
      this.zeigUr = false
      this.zeigPe = false
      this.zeigAfg = false

    }
    else if (kürzel === "en") {
      this.zeigEn = !this.zeigEn
      this.zeigDe = false
      this.zeigAfg = false
      this.zeigPe= false
      this.zeigUr = false
    }
    else if (kürzel === "afg") {
      this.zeigAfg = !this.zeigAfg
      this.zeigDe = false
      this.zeigEn = false
      this.zeigUr = false
      this.zeigPe = false
    }
    else if (kürzel === "ur") {
      this.zeigUr = !this.zeigUr
      this.zeigDe = false
      this.zeigEn = false
      this.zeigAfg = false
      this.zeigPe= false
    }else  {
      this.zeigPe = !this.zeigPe
      this.zeigDe = false
      this.zeigEn = false
      this.zeigAfg = false
      this.zeigUr= false
    }
    

      }
  
}

