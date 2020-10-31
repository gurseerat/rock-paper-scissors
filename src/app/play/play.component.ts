import { AfterViewInit, Component, EventEmitter, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit, AfterViewInit {
  choices: Array<string>;
  bonusChoices: Array<string>;
  borderColor: Array<any> = [];
  @Output() choiceFlag = new EventEmitter<boolean>();
  @Output() isSelected = new EventEmitter<boolean>();


  constructor(private _globals: Globals, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    ({ choices: this.choices, bonusChoices: this.bonusChoices, borderColors: this.borderColor } = this._globals);

  }

  ngAfterViewInit(): void {
    this.bonusChoices.forEach((element, index) => {
      [...document.querySelectorAll<HTMLElement>('.icon-' + element + '-item')].forEach(el => {
        el.style.color = this.borderColor[index];
      });
    });
    this.cdr.detectChanges();

  }

  selectChoiceHandler(choice): void {
    this.choiceFlag.emit(choice);
    this.isSelected.emit(true);
  }

}
