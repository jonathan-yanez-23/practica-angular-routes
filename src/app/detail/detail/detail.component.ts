import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../models/heroes.interface';
import { ApiheroesService } from '../../apiheroes.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {
    
  }

  

}
