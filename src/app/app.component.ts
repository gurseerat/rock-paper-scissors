import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { GamesRulesPopupComponent } from './games-rules-popup/games-rules-popup.component';

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
  constructor(private modalService: NgbModal) {}

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

  openGamesRules() {
    this.modalService.open(GamesRulesPopupComponent);
  }

}
