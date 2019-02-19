import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { FormBuilder } from '@angular/forms';
import { HotelDetailsService } from './hotel-details.service';
import { HotelsService } from '../../services/request/hotels.service';
import { HotelDetailsComponent } from './hotel-details.component';
describe('HotelDetailsComponent', () => {
  let component: HotelDetailsComponent;
  let fixture: ComponentFixture<HotelDetailsComponent>;
  beforeEach(() => {
    const sharedDataServiceStub = {
      sharedData: { subscribe: () => ({}) },
      userStatus: { subscribe: () => ({}) },
      updateUserLoggedInData: () => ({})
    };
    const formBuilderStub = {};
    const hotelDetailsServiceStub = {
      createForm: () => ({}),
      createLoginForm: () => ({})
    };
    const hotelsServiceStub = {
      bookHotel: () => ({ subscribe: () => ({}) }),
      loginUser: () => ({ subscribe: () => ({}) })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HotelDetailsComponent],
      providers: [
        { provide: SharedDataService, useValue: sharedDataServiceStub },
        { provide: FormBuilder, useValue: formBuilderStub },
        { provide: HotelDetailsService, useValue: hotelDetailsServiceStub },
        { provide: HotelsService, useValue: hotelsServiceStub }
      ]
    });
    fixture = TestBed.createComponent(HotelDetailsComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('modalOverlay defaults to: false', () => {
    expect(component.modalOverlay).toEqual(false);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const hotelDetailsServiceStub: HotelDetailsService = fixture.debugElement.injector.get(
        HotelDetailsService
      );
      spyOn(hotelDetailsServiceStub, 'createForm');
      spyOn(hotelDetailsServiceStub, 'createLoginForm');
      component.ngOnInit();
      expect(hotelDetailsServiceStub.createForm).toHaveBeenCalled();
      expect(hotelDetailsServiceStub.createLoginForm).toHaveBeenCalled();
    });
  });
});
