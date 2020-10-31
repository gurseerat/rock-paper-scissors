import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesRulesPopupComponent } from './games-rules-popup.component';

describe('GamesRulesPopupComponent', () => {
  let component: GamesRulesPopupComponent;
  let fixture: ComponentFixture<GamesRulesPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesRulesPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesRulesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
