import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { CrudService } from "../crud.service";

@Component({
  selector: "app-crud",
  templateUrl: "./crud.component.html",
  styleUrls: ["./crud.component.scss"]
})
export class CrudComponent implements OnInit {
  heroForm = new FormGroup({
    heroName: new FormControl(),
    heroDescription: new FormControl()
  });

  constructor(private crud: CrudService) {}

  ngOnInit() {
    this.getHeros();
  }

  //to get all heros
  getHeros() {
    this.crud.getHeros().subscribe(res => {
      console.log(res);
    });
  }

  // to insert new hero
  insertHero() {
    let data = this.heroForm.value;
    console.log(data);

    this.crud.postHero(data.heroName, data.heroDescription).subscribe(res => {
      console.log(res);
    });
  }
}
