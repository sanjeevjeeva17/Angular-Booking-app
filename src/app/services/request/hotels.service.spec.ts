import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HotelsService } from './hotels.service';
describe('HotelsService', () => {
  let service: HotelsService;
  beforeEach(() => {
    const httpClientStub = { get: () => ({}), post: () => ({}) };
    TestBed.configureTestingModule({
      providers: [
        HotelsService,
        { provide: HttpClient, useValue: httpClientStub }
      ]
    });
    service = TestBed.get(HotelsService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('apiURL defaults to: http://5c505db9ee97f600140480dd.mockapi.io/', () => {
    expect(service.apiURL).toEqual(
      'http://5c505db9ee97f600140480dd.mockapi.io/'
    );
  });
  describe('getHotels', () => {
    it('makes expected calls', () => {
      const httpClientStub: HttpClient = TestBed.get(HttpClient);
      spyOn(httpClientStub, 'get');
      service.getHotels();
      expect(httpClientStub.get).toHaveBeenCalled();
    });
  });
  describe('bookHotel', () => {
    it('makes expected calls', () => {
      const httpClientStub: HttpClient = TestBed.get(HttpClient);
      spyOn(httpClientStub, 'post');
      service.bookHotel();
      expect(httpClientStub.post).toHaveBeenCalled();
    });
  });
  describe('loginUser', () => {
    it('makes expected calls', () => {
      const httpClientStub: HttpClient = TestBed.get(HttpClient);
      spyOn(httpClientStub, 'post');
      service.loginUser();
      expect(httpClientStub.post).toHaveBeenCalled();
    });
  });
});
