import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { Globals } from '../globals';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, AfterViewInit {

  choices: Array<string>;
  borderColor: Array<any> = [];
  @Input() bonusChoiceFlag;
  @Output() isEvaluated = new EventEmitter<boolean>();
  @Output() win = new EventEmitter<boolean>();

  constructor(private resultService: ResultService, private _globals: Globals, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.choices = (this.bonusChoiceFlag && [...this._globals.bonusChoices]) || [...this._globals.choices]
    this.borderColor = [...this._globals.borderColors];
    this.win.emit(false);
    this.cdr.detectChanges();

  }

  ngAfterViewInit(): void {
    this.choices.forEach((element, index) => {
      document.getElementById(element + '-item').style.borderColor = this.borderColor[index];
    });

  }

  /**
   * 
   * @param event 
   * @description emit message and flags
   * 
   */
  selectHandler(event): void {
    const selectedChoice = event.target.value;
    const selectedIndex = this.choices.indexOf(selectedChoice);
    const computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
    const computerChoiceIndex = this.choices.indexOf(computerChoice);
    const message = this.sendMessage(selectedIndex, computerChoiceIndex);
    const choiceObj = { selectedChoice, computerChoice };

    this.resultService.setMessage(message);
    this.resultService.setChoices(choiceObj);
    this.isEvaluated.emit(true);
  }

  /**
   * 
   * @param selectedIndex 
   * @param computerChoiceIndex
   * @description compare selected sign with random 
   * and send message 
   * 
   */
  sendMessage(selectedIndex, computerChoiceIndex): string {
    if (selectedIndex === computerChoiceIndex) {
      return "It's a Tie!";
    }
    if (this.compare((selectedIndex - computerChoiceIndex), this.choices.length) < this.choices.length / 2) {
      this.win.emit(true);
      return 'You win!';
    } else {
      return 'You loose!';
    }
  }

  compare(arg1, arg2): any {
    const result = arg1 % arg2;
    return (result < 0 && result + arg2) || result;
  }

}
