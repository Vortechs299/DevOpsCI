import { TestBed } from '@angular/core/testing';

import { SharedfunctionsService } from './sharedfunctions.service';

describe('SharedfunctionsService', () => {
  let service: SharedfunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedfunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
