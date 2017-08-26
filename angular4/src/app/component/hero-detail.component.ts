import {Component,Input } from '@angular/core';
import { Hero } from './../model/hero'
@Component({
  selector: "hero-detail",
  templateUrl:'./heroDetail.html'
})

export class heroDetailComponent {
  @Input()hero: Hero;
}
