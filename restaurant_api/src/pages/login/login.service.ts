import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstService } from "../../providers/const-service";


@Injectable()
export class LoginService {

  constructor(private http: HttpClient,
    public constService: ConstService) {
  }


  login(user: any) {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post(this.constService.base_url + 'auth/local', body, {
      headers: headers
    });
  }

  // send facebook user details of user to server
  loginUserViaFacebook(register: any) {
    const body = register;
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.http.post(
      this.constService.base_url + "api/users/auth/facebook",
      body,
      {
        headers: headers
      }
    );
  }

  //send google user details of user to server
  loginUserViaGoogle(register: any) {
    const body = register;
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.http.post(
      this.constService.base_url + "api/users/auth/google",
      body,
      {
        headers: headers
      }
    );
  }


}
