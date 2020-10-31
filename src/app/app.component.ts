import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  bonusChoiceFlag: boolean;
  isSelectedFlag: boolean;
  isEvaluatedFlag;
  win: boolean;
  constructor() {}

  ngOnInit(): void {
    this.isSelectedFlag = false;
    this.isEvaluatedFlag = false;
    this.win = false;
  }

  choiceFlagEvent(flag): void {
    this.bonusChoiceFlag = flag;
  }

  isSelectedEvent(flag): void {
    this.isSelectedFlag = flag;
  }

  isEvaluateEvent(flag: boolean): void {
    this.isEvaluatedFlag = flag;
  }

  winEvent(flag: boolean): void {
    this.win = flag;
  }

}
