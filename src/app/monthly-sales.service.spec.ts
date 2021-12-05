import { TestBed } from '@angular/core/testing';

import { MonthlySalesService } from './monthly-sales.service';

describe('MonthlySalesService', () => {
  let service: MonthlySalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlySalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
