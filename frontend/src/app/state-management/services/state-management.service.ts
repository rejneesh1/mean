import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StateManagementService {
  constructor() {}

  //1. to check click value
  private click: boolean = false;
  private clickTrack = new BehaviorSubject<boolean>(this.click);
  getClick(): Observable<boolean> {
    return this.clickTrack.asObservable();
  }
  setClick(val?: boolean): void {
    this.clickTrack.next((this.click = val ? val : !this.click));
  }
  //----------------------------------------------------

  // 2. behaviour BehaviorSubject to show input txt
  private input: string = "";
  private inputSubject = new BehaviorSubject<string>(this.input);
  getInput(): Observable<string> {
    return this.inputSubject.asObservable();
  }
  setInput(val: string): void {
    this.inputSubject.next((this.input = val));
    //----------------------------------------------------
  }
}
