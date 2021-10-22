import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/models/heroes.interface';
import { ApiheroesService } from 'src/app/apiheroes.service';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  heroeId: string = '12';
  heroeData: Heroe ;
  constructor(private route: ActivatedRoute, private apiheroesService: ApiheroesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.heroeId = '' + params.get('heroeId');
      console.log(params);
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
