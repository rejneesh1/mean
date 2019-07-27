import { Component, OnInit, OnDestroy } from "@angular/core";
import { StateManagementService } from "../services/state-management.service";

@Component({
  selector: "app-behaviour-subject",
  templateUrl: "./behaviour-subject.component.html",
  styleUrls: ["./behaviour-subject.component.scss"]
})
export class BehaviourSubjectComponent implements OnInit, OnDestroy {
  click: any;
  click$: any;
  input: string;
  input$: any;
  constructor(private stateManagementservice: StateManagementService) {}

  ngOnInit() {
    this.startClickBehaviourSubjectFn();
    this.startInputBehaviourSubjectFn();
  }

  startClickBehaviourSubjectFn() {
    this.click$ = this.stateManagementservice.getClick().subscribe(res => {
      this.click = res;
    });
  }

  clickFn() {
    this.stateManagementservice.setClick();
  }

  startInputBehaviourSubjectFn() {
    this.input$ = this.stateManagementservice.getInput().subscribe(res => {
      this.input = res;
    });
  }

  inputFn(e) {
    this.stateManagementservice.setInput(e.target.value);
  }

  ngOnDestroy() {
    this.stateManagementservice.setClick(false);
    this.stateManagementservice.setInput("");
    this.click$.unsubscribe();
    this.input$.unsubscribe();
  }
}
