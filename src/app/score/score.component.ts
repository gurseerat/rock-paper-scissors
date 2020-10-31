import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit, OnChanges {

  score: any;
  @Input() bonusChoiceFlag;
  @Input() isSelectedFlag;
  @Input() win;
  title;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.score = 0;
    this.isSelectedFlag = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.win?.currentValue) {
      this.score++;
    }
    console.log("changes", changes)
    console.log(this.score)

    if(!this.isSelectedFlag) {
      this.title = 'Play Now';
    } else if(this.isSelectedFlag && this.bonusChoiceFlag) {
      this.title = 'Rock Paper Scissors Lizard Spock';
    } else {
      this.title = 'Rock Paper Scissors';
    }
    this.cdr.detectChanges();
  }

}
