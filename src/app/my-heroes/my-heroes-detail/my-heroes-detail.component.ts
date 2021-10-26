import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroes.interface';
import { ActivatedRoute } from '@angular/router';
import { LocalheroesStorageService } from 'src/app/localheroes-storage.service';
@Component({
  selector: 'app-my-heroes-detail',
  templateUrl: './my-heroes-detail.component.html',
  styleUrls: ['./my-heroes-detail.component.scss']
})
export class MyHeroesDetailComponent implements OnInit {
  heroeId: string;
  heroeData: Heroe;
  constructor(private route: ActivatedRoute, private localHeroesStorageService: LocalheroesStorageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.heroeId = '' + params.get('heroeId');
      this.heroeData = this.localHeroesStorageService.getLocalHeroeById(Number(this.heroeId));
    });
  }

}
