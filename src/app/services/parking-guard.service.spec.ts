import { TestBed, inject } from '@angular/core/testing';

import { ParkingGuardService } from './parking-guard.service';

describe('ParkingGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkingGuardService]
    });
  });

  it('should be created', inject([ParkingGuardService], (service: ParkingGuardService) => {
    expect(service).toBeTruthy();
  }));
});
