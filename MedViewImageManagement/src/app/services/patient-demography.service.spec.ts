import { TestBed } from '@angular/core/testing';

import { PatientDemographyService } from './patient-demography.service';

describe('PatientDemographyService', () => {
  let service: PatientDemographyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientDemographyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
