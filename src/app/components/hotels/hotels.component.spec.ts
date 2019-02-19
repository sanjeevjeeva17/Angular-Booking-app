import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HotelsComponent} from './hotels.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HotelDetailsService} from "../hotel-details/hotel-details.service";
import {Router} from "@angular/router";

describe('HotelsComponent', () => {
  let component: HotelsComponent;
  let fixture: ComponentFixture<HotelsComponent>;
  beforeEach(async(() => {
    const formBuilderStub = {};
    const hotelServiceStub = {
      getHotels: () => ({})
    };
    const routerStub = {
      navigate: () => ({})
    };
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [HotelsComponent],
      providers: [{provide: Router, useValue: routerStub}],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
