import { TestBed } from '@angular/core/testing';

// import { StudentdataService } from './Shopdata.service';
import { Shopdata } from './Shopdata.service';

describe('StudentdataService', () => {
  let service: Shopdata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Shopdata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
