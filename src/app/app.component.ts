import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  bonusChoiceFlag: boolean;
  isSelectedFlag: boolean;
  isEvaluatedFlag: boolean;
  constructor() {}

  ngOnInit(): void {
    this.isSelectedFlag = false;
    this.isEvaluatedFlag = false;
  }

  choiceFlagEvent(flag): void {
    this.bonusChoiceFlag = flag;
  }

  isSelectedEvent(flag): void {
    this.isSelectedFlag = flag;
  }

  isEvaluateEvent(flag): void {
    this.isEvaluatedFlag = flag;
  }

}
