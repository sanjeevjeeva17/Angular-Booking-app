import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Hotel} from '../data-models/hotel';
import {Authorization} from '../data-models/authorization';


@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  constructor() {
  }

  /*type of the selected hotel behavioral subject
  * creating data store for selected Hotel*/
  private hotelDataModel = {} as Hotel;
  public selectedHotel = new BehaviorSubject(this.hotelDataModel);
  sharedData = this.selectedHotel.asObservable();

  /*creating data store for user logged in status*/
  private AuthorizationDataModel = {} as Authorization;
  public UserLogStatus = new BehaviorSubject(this.AuthorizationDataModel);
  userStatus = this.UserLogStatus.asObservable();

  /*function for updating the selected hotel data store
  * @params object of type Hotel*/
  updateSharedData(data: Hotel) {
    this.selectedHotel.next(data);
  }

  /*function for updating the user logged in data store
  * @params object of type Authorization*/
  updateUserLoggedInData(data: Authorization) {
    this.UserLogStatus.next(data);
  }
}
