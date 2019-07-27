import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CrudService {
  baseUrl = "http://127.0.0.1:4000";

  constructor(private http: HttpClient) {}

  getHeros() {
    return this.http.get(this.baseUrl + "/api/get");
  }

  postHero(name, description) {
    let body = { name: name, description: description };
    return this.http.post(this.baseUrl + "/api/create", body);
  }
}
