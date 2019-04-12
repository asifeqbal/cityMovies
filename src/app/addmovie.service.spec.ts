import { TestBed } from '@angular/core/testing';

import { AddmovieService } from './addmovie.service';

describe('AddmovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddmovieService = TestBed.get(AddmovieService);
    expect(service).toBeTruthy();
  });
});
