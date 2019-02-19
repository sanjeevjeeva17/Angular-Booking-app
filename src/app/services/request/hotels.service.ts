import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hotel} from '../../data-models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  apiURL: string = 'http://5c505db9ee97f600140480dd.mockapi.io/'; // API URL
  public options;

  constructor(private httpClient: HttpClient) {
  }

  createHeader() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.options = {Headers: headers};
    }

  /*get API call for Hotel details
  * @param empty
  * returns response*/
  public getHotels() {
    return this.httpClient.get<Hotel[]>(this.apiURL + 'hotels');
  }

  /*post API call for Booking Hotel
  * returns success*/
  public bookHotel() {
    return this.httpClient.post(this.apiURL + 'booking', null, this.options);
  }

  /*post authentication for user
  * returns valid user response*/
  public loginUser() {
    return this.httpClient.post(this.apiURL + 'auth', null, this.options);
  }
}
