import { TestBed } from '@angular/core/testing';
import { HotelDetailsService } from './hotel-details.service';
describe('HotelDetailsService', () => {
  let service: HotelDetailsService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HotelDetailsService] });
    service = TestBed.get(HotelDetailsService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
    expect(service).not.toBeUndefined();
  });
});
