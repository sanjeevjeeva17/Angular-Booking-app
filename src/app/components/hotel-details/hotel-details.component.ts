import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../services/shared-data.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HotelDetailsService} from './hotel-details.service';
import {HotelsService} from '../../services/request/hotels.service';
import {Authorization} from "../../data-models/authorization";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  public hotelDetails: any;
  public userInformation: FormGroup;
  public loginDetails: FormGroup;
  public userLoggedInStatus: Authorization;
  public message: any;
  public modalOverlay: boolean = false;
  public subscriptionOne;
  public subscriptionTwo;

  constructor(public sharedService: SharedDataService,
              public hotelDetailsService: HotelDetailsService,
              public formBuilder: FormBuilder,
              public hotelService: HotelsService) {
  }

  /*
  * initializing hotel-details component*/
  ngOnInit() {
    this.userInformation = this.hotelDetailsService.createForm(this.formBuilder);
    this.loginDetails = this.hotelDetailsService.createLoginForm(this.formBuilder);
    /*subscribing shared data store for hotels details*/
    this.subscriptionOne = this.sharedService.sharedData.subscribe(result => {
      this.hotelDetails = result;
    });
    /*subscribing to check user login status*/
    this.subscriptionTwo = this.sharedService.userStatus.subscribe(result => {
      this.userLoggedInStatus = result;
    });
  }

  /*
  * function books hotel if user is logged in and form is valid
  * @param empty*/
  bookHotel() {
    if (this.userLoggedInStatus.token) {
      if (this.userInformation.valid) {
        this.hotelService.bookHotel().subscribe(response => {
          this.message = response ? 'Booking Successful' : 'Sorry please try again later';
        });
      }
    } else {
      this.modalOverlay = true;
    }
  }

  /*function for logging in the user
  * @params empty*/
  loginUser() {
    if (this.loginDetails.valid) {
      this.hotelService.loginUser().subscribe(response => {
        this.validateUser(response);
      });
    }
  }

  /*check for valid user
  * @param API response object*/
  validateUser(response) {
    if (response.user.firstname === this.loginDetails.controls.userFirstName.value) {
      this.sharedService.updateUserLoggedInData(response);
      this.modalOverlay = false;
    } else {
      this.message = 'Please provide valid user data';
    }
  }

  /*function to close the modal overlay
  * @param empty*/
  closeModalOverlay() {
    this.modalOverlay = false;
  }

  ngOnDestory() {
    this.subscriptionOne.unsubscribe();
    this.subscriptionTwo.unsubscribe();
  }
}
