import { TestBed } from '@angular/core/testing';

import { LocalheroesStorageService } from './localheroes-storage.service';

describe('LocalheroesStorageService', () => {
  let service: LocalheroesStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalheroesStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
