import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHeroesCreationComponent } from './my-heroes-creation.component';

describe('MyHeroesCreationComponent', () => {
  let component: MyHeroesCreationComponent;
  let fixture: ComponentFixture<MyHeroesCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHeroesCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHeroesCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
