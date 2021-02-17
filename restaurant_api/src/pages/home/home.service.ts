import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstService } from "../../providers/const-service";

@Injectable()

export class HomeService {
  constructor(public http: HttpClient, public constService: ConstService) {

  }

  getCategories() {
    const headers = new HttpHeaders();
    return this.http.get(this.constService.base_url + 'api/categories', {
      headers: headers
    });
  }

  getUpcomings() {
    const headers = new HttpHeaders();
    return this.http.get(this.constService.base_url + 'api/upcomings', {
      headers: headers
    });
  }

}
