import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  score: any = 0;
  message: any = '';
  constructor(private resultService: ResultService) { }

  ngOnInit() {
    this.resultService.getScore().subscribe(data => {
      this.score = data;
    });
    this.resultService.getMessage().subscribe (data => {
      this.message = data;
    });
    console.log(this.score);

  }

}
