import { TestBed } from '@angular/core/testing';

import { ListProductsService } from './list-products.service';

describe('ListProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListProductsService = TestBed.get(ListProductsService);
    expect(service).toBeTruthy();
  });
});
