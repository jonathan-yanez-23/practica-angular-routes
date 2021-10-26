import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroes.interface';
import { ApiheroesService } from 'src/app/apiheroes.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.scss']
})
export class HeroeDetailComponent implements OnInit {
  heroeId: string = '12';
  heroeData: Heroe ;
  constructor(private route: ActivatedRoute, private apiheroesService: ApiheroesService) { }
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.heroeId = '' + params.get('heroeId');
      this.apiheroesService.getCharactersById(Number(this.heroeId))
      .subscribe((data: any)=>{
        this.heroeData = {
          id: data.id,
          name: data.name,
          biography: JSON.stringify(data.biography),
          powerstats: JSON.stringify(data.powerstats),
          appearance: JSON.stringify(data.appearance),
          work: JSON.stringify(data.work),
          connections: JSON.stringify(data.connections),
          image: data.image.url
        };
      });
    });
  }


}
