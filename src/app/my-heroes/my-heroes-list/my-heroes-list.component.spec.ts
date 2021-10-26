import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHeroesListComponent } from './my-heroes-list.component';

describe('MyHeroesListComponent', () => {
  let component: MyHeroesListComponent;
  let fixture: ComponentFixture<MyHeroesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHeroesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
