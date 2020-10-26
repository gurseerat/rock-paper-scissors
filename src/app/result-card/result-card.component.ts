import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {

  choiceData: any;
  resultMessage: string;
  @Output() isSelected = new EventEmitter<string>();
  @Output() isEvaluated = new EventEmitter<string>();

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.resultService.getChoices().subscribe(data => {
      this.choiceData = data;
    });
    this.resultService.getMessage().subscribe(data => {
      this.resultMessage = data;
    });
  }

  playAgainEvent() {
    this.isSelected.emit('false');
    this.isEvaluated.emit('false');
  }

}
