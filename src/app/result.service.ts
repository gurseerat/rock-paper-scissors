import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  message: BehaviorSubject<any> = new BehaviorSubject(undefined);
  choices: BehaviorSubject<any> = new BehaviorSubject(undefined);
  

  constructor() { }

  public setMessage(val): void {
    this.message.next(val);
  }

  public getMessage(): Observable<any> {
    return this.message.asObservable();
  }

  public setChoices(val): void {
    this.choices.next(val);
  }

  public getChoices(): Observable<any> {
    return this.choices.asObservable();
  }
}
