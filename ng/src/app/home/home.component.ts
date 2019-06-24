import { Component, OnInit } from "@angular/core";

import { HomeService } from "./../home.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  data$: Observable<any>;
  random$: Observable<any>;
  constructor(private home: HomeService) {}

  ngOnInit() {
    //map and filter
    this.data$ = this.home
      .test1()
      .pipe(map(res => res["data"].filter(a => a.id == 3)));
    this.data$.subscribe(res => {
      console.log(res);
    });

    this.random$ = Observable.create(observer => {
      observer.next(1);
      observer.next(11);
      observer.next(111);
      observer.complete();
      observer.next(1111);
    });

    this.random$.subscribe(res => console.log(res));
  }

  beckendCall() {
    console.log("called");
    this.home.test().subscribe(res => {
      console.log(res);
    });
  }
}
