import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../models/heroes.interface';

@Component({
  selector: 'app-my-heroes-list',
  templateUrl: './my-heroes-list.component.html',
  styleUrls: ['./my-heroes-list.component.scss']
})
export class MyHeroesListComponent implements OnInit {
  myHeroes: Heroe[] = [
    {
      id: 1,
      name: "Mordecai",
      biography: "Ave azul de historias corrientes",
      powerstats: "Fuerza 10, Velocidad 10, Inteligencia 1239",
      appearance: "Azul, 190cm, pico de 30 cm",
      work: "Cuidador del parque ",
      connections: "Mejor amigo de Rigby, compañero de trabajo de Benson, Musculitos, Pops, etc",
      image: "https://e7.pngegg.com/pngimages/124/349/png-clipart-mordecai-rigby-drawing-fan-art-judges-white-mammal.png"
    },
    {
      id: 2,
      name: "Rigby",
      biography: "Tejón marrón de historias corrientes",
      powerstats: "Fuerza 1, Velocidad 100, Inteligencia 111",
      appearance: "Azul, 90cm",
      work: "Cuidador del parque ",
      connections: "Mejor amigo de Mordecai, compañero de trabajo de Benson, Musculitos, Pops, etc",
      image: "http://pm1.narvii.com/7258/0161ad76da0bf95d27a2526ca7e88a0069c8164cr1-540-648v2_00.jpg"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
