import { TestBed } from '@angular/core/testing';

import { EuropeGeoGuessingService } from './europe-geo-guessing.service';

describe('EuropeGeoGuessingService', () => {
  let service: EuropeGeoGuessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EuropeGeoGuessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
