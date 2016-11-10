import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Router }   from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css']
    // providers: [HeroService]
})



export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }

  ngOnInit(): void {
      this.getHeroes();
  }

  gotoDetail(): void {
     this.router.navigate(['/detail', this.selectedHero.id]);
  }

  constructor(
      private heroService: HeroService,
      private router: Router
  ) { }

}

export class Hero {
    id: number;
    name: string;
}
