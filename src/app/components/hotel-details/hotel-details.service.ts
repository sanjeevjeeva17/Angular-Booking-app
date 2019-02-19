import {Injectable} from '@angular/core';
import {Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HotelDetailsService {

  constructor() {
  }
/*function to create form for booking
* @param form builder
* @returns form data*/
  createForm(formBuilder) {
    const userInformation = formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required]
  });
    return userInformation;
  }
  /*function to create form for login
  * @param form builder
  * @returns form data*/
  createLoginForm(formBuilder) {
    const loginForm = formBuilder.group({
      userFirstName: ['', Validators.required],
      userLastName: ['', Validators.required],
    });
    return loginForm;
  }
}
