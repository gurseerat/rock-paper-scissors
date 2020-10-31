import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-games-rules-popup',
  templateUrl: './games-rules-popup.component.html',
  styleUrls: ['./games-rules-popup.component.css']
})
export class GamesRulesPopupComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
