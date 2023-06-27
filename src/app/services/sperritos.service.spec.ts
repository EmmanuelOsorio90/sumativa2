import { TestBed } from '@angular/core/testing';

import { SPerritosService } from './sperritos.service';

describe('SPerritosService', () => {
  let service: SPerritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPerritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
