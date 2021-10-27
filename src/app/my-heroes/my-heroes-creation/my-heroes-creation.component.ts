import { Component, OnInit } from '@angular/core';
import { LocalheroesStorageService } from 'src/app/services/localheroes-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Heroe } from 'src/app/models/heroes.interface';

@Component({
  selector: 'app-my-heroes-creation',
  templateUrl: './my-heroes-creation.component.html',
  styleUrls: ['./my-heroes-creation.component.scss']
})
export class MyHeroesCreationComponent implements OnInit {
  public heroeRegisterForm: FormGroup;
  public submitted: boolean = false;
  constructor(private localHeroesService: LocalheroesStorageService, private formBuilder: FormBuilder) {
    this.heroeRegisterForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.maxLength(4)]],

    });
   }
  
  ngOnInit(): void {
  }

  public onSubmit(): void{
    this.submitted = true;
    if(this.heroeRegisterForm.valid){
      const heroe: Heroe = {
        id: Number(this.heroeRegisterForm.get('id')?.value),
        name: this.heroeRegisterForm.get('name')?.value,
        biography: this.heroeRegisterForm.get('biography')?.value,
        powerstats: this.heroeRegisterForm.get('powerstats')?.value,
        appearance: this.heroeRegisterForm.get('appearance')?.value,
        work: this.heroeRegisterForm.get('work')?.value,
        connections: this.heroeRegisterForm.get('connections')?.value,
        image: this.heroeRegisterForm.get('image')?.value
      }
      this.localHeroesService.pushLocalHeroe(heroe);
    }
  }

}
