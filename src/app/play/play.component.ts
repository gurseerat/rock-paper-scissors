import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() choiceFlag = new EventEmitter<string>();
  @Output() isSelected = new EventEmitter<string>();


  constructor(private _globals: Globals) { }

  ngOnInit(): void {
    this.choices = [...this._globals.choices];
    this.bonusChoices = [...this._globals.bonusChoices];
    this.borderColor = [...this._globals.borderColors];
  }

  ngAfterViewInit(): void {
    this.bonusChoices.forEach((element, index) => {
      [...document.querySelectorAll<HTMLElement>('.icon-' + element + '-item')].forEach(el => {
        el.style.color = this.borderColor[index];
      });
    });
  }

  selectChoiceHandler(choice): void {
    this.choiceFlag.emit(choice);
    this.isSelected.emit('true');
  }

}
