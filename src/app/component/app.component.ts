import { Component } from '@angular/core';

import {Hero} from './../model/hero'
import { HeroService } from './../service/hero.service'
//第一个demo,双向数据绑定
//export class Hero{
//  id:number;
//  name:string;
//}
//
//@Component({
//  selector: 'app-root',
//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.css']
//})
//
//export class AppComponent {
//  title = '终于可以用上ng4了!';
//  hero:Hero = {
//    id:1,
//    name:"input双向绑定"
//  }
//}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HeroService]
})

export class AppComponent {
  heroes:Hero[];
  selectedHero:Hero;
  constructor(private heroService:HeroService) {

  }

  ngOnInit():void {
    this.getHeroes();
  }

  getHeroes():void {
    this.heroService.getHeroes().then(heroes =>this.heroes = heroes);
  }

  onSelect(hero:Hero):void {
    this.selectedHero = hero;
  }
}


