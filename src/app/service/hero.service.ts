import { Injectable } from '@angular/core';

import {Hero} from './../model/hero'
import {HEROES} from './../model/mock-heroes'


@Injectable()
export class HeroService {
  getHeroes():Promise<Hero[]> {
    return Promise.resolve(HEROES)
  }
}
