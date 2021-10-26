import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHeroesDetailComponent } from './my-heroes-detail.component';

describe('MyHeroesDetailComponent', () => {
  let component: MyHeroesDetailComponent;
  let fixture: ComponentFixture<MyHeroesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHeroesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHeroesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
