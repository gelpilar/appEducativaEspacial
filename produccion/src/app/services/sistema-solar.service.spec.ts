import { TestBed } from '@angular/core/testing';

import { SistemaSolarService } from './sistema-solar.service';

describe('SistemaSolarService', () => {
  let service: SistemaSolarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SistemaSolarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
