import {Component, OnInit} from '@angular/core';
import {HotelsService} from '../../services/request/hotels.service';
import {Hotel} from '../../data-models/hotel';
import {Router} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  public response;

  constructor(private hotelsService: HotelsService,
              public router: Router,
              private sharedService: SharedDataService) {
  }

  ngOnInit() {
    this.hotelsService.getHotels().subscribe((result) => {
      this.response = result;
      console.log(result[0].available);
    });
  }

  hotelDetails(hotelDetails: Hotel) {
    this.sharedService.updateSharedData(hotelDetails);
    this.router.navigate(['HotelDetails']);
  }

}
