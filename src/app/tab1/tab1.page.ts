import { Component } from '@angular/core';
/**
 * @author Simon Meier
 */
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  /**
   * erzielter Score der beiden input felder
   * TODO: Auslagerung als Service
   */
  score_1: number;
  score_2: number;

  /**
   * Startwert
   * TODO: Auslagerung als Service
   */
  startfive_1: number;
  startfive_2: number;

  constructor() {
    /**
     * Startwert wird Standardmäßig bei Erzeugen der Seite auf 301 Gesetzt
     */
    this.startfive_1 = 301;
    this.startfive_2 = 301;
  }

  setGamemode(input: number) {
    this.startfive_1 = input;
    this.startfive_2 = input;
  }

  calculateScore_1(): number {
    this.startfive_1 -= this. score_1;
    this.score_1 = null;
    return this.startfive_1;
  }
  calculateScore_2(): number {
    this.startfive_2 -= this.score_2;
    this.score_2 = null;
    return this.startfive_2;
  }

  reset() {
    this.startfive_1 = 301;
    this.startfive_2 = 301;
  }

  calculateAverage() {

  }

}
