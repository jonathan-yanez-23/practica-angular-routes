import { Component, OnInit } from '@angular/core';
import { LocalheroesStorageService } from 'src/app/localheroes-storage.service';

@Component({
  selector: 'app-my-heroes-creation',
  templateUrl: './my-heroes-creation.component.html',
  styleUrls: ['./my-heroes-creation.component.scss']
})
export class MyHeroesCreationComponent implements OnInit {

  constructor(private localHeroesService: LocalheroesStorageService) { }
  
  ngOnInit(): void {
  }

}
