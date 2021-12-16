import { TestBed } from '@angular/core/testing';

import { AutomovilesServiceService } from './automoviles-service.service';

describe('AutomovilesServiceService', () => {
  let service: AutomovilesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutomovilesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
