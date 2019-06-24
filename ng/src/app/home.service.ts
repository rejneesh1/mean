import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  testUrl = "https://reqres.in/api/users?page=2";
  constructor(private http: HttpClient) {}
  test() {
    return this.http.get("/api/home");
  }

  test1() {
    return this.http.get(this.testUrl);
  }
}
