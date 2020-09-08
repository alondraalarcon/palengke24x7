import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  url = environment.url;
  consumerKey = environment.consumerKey;
  consumerSecret = environment.consumerSecret;

  constructor(private http: HttpClient) { }

  loginUser(username, password) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',

    });
    const userData = `username=${username}&password=${password}`; 
    return new Promise((resolve, reject) => {
      this.http
        .post(`${this.url}/wp-json/jwt-auth/v1/token`, userData, { headers })
        .subscribe(
          res => {
            resolve(res);
          },
          err => {
            resolve(err);
          }
        );
    });
  }

  createUser(email, username, password) {
    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const data = `username=${username}&email=${email}&password=${password}`;
    return new Promise(resolve => {
      this.http
        .post(
          `${this.url}/wp-json/wc/v3/customers?consumer_key=${
            this.consumerKey
          }&consumer_secret=${this.consumerSecret}`,
          data,
          { headers: header }
        )
        .subscribe(customerData => {
          resolve(customerData);
        });
    });
  }
/*
  updateUser(user, address) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const data = {
      first_name: user.first_name,
      last_name: user.last_name,
      billing: address,
      shipping: address
    };

    const covertedData = this.JSON_to_URLEncoded(data);

    return new Promise(resolve => {
      this.http
        .post(
          `${this.url}/wp-json/wc/v3/customers/${user.id}/?consumer_key=${
            this.consumerKey
          }&consumer_secret=${this.consumerSecret}`,
          covertedData,
          { headers }
        )
        .subscribe(response => {
          resolve(response);
        });
    });
  }
*/
}
