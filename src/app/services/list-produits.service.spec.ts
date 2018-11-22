import { TestBed } from '@angular/core/testing';

import { ListProduitsService } from './list-produits.service';

describe('ListProduitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListProduitsService = TestBed.get(ListProduitsService);
    expect(service).toBeTruthy();
  });
});
