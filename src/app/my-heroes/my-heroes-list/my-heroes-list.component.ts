import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../models/heroes.interface';
import { LocalheroesStorageService } from 'src/app/services/localheroes-storage.service';

@Component({
  selector: 'app-my-heroes-list',
  templateUrl: './my-heroes-list.component.html',
  styleUrls: ['./my-heroes-list.component.scss']
})
export class MyHeroesListComponent implements OnInit {
  myHeroes: Heroe[] = [];
  constructor(private localHeroesStorageService: LocalheroesStorageService) { }

  ngOnInit(): void {
    this.myHeroes = this.localHeroesStorageService.getLocalHeroes();
  }

}
