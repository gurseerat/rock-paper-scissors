import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Globals } from '../globals';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit, AfterViewInit {

  choices: Array<string>;
  score: any = 0;
  borderColor: Array<any> = [];
  @Input() bonusChoiceFlag;
  @Output() isEvaluated = new EventEmitter<string>();

  constructor(private resultService: ResultService, private _globals: Globals) { }

  ngOnInit(): void {
    this.choices = (this.bonusChoiceFlag && [...this._globals.bonusChoices]) || [...this._globals.choices]
    this.borderColor = [...this._globals.borderColors];
  }

  ngAfterViewInit(): void {
    this.choices.forEach((element, index) => {
      document.getElementById(element + '-item').style.borderColor = this.borderColor[index];
    });
  }

  selectHandler(event): void {
    const selected = event.target.value;
    const selectedIndex = this.choices.indexOf(selected);
    const computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
    const computerChoiceIndex = this.choices.indexOf(computerChoice);
    const message = this.sendMessage(selectedIndex, computerChoiceIndex);
    this.resultService.setMessage(message);
    const choiceObj = {
      selectedChoice: selected,
      computerChoice
    };
    this.resultService.setChoices(choiceObj);
    this.isEvaluated.emit('true');
  }

  sendMessage(selectedIndex, computerChoiceIndex): string {
    if (selectedIndex === computerChoiceIndex) {
      return "It's a Tie!";
    }
    if (this.compare((selectedIndex - computerChoiceIndex), this.choices.length) < this.choices.length / 2) {
      this.resultService.setScore(this.score++);
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
