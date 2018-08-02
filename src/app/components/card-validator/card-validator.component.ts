import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-validator',
  templateUrl: './card-validator.component.html',
  styleUrls: ['./card-validator.component.css']
})
export class CardValidatorComponent implements OnInit {

  cardNumber: String = "";
  enableVisa: boolean = false;
  enableMC: boolean = false;
  enableAmex: boolean = false;
  enableDiners: boolean = false;
  cardValid : boolean = true;
  dateToday: Date = new Date();
  months: String[] = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  years: number[] = [];

  constructor() {
    let year = this.dateToday.getFullYear();
    for (let start = year; start < year + 10; start++) {
      this.years.push(start);
    }
  }

  ngOnInit() {
  }

  checkCircuit($event) {
    this.cardValid = true;
    let firstDigit = "";
    let secondDigit = "";
    if (this.cardNumber[0]) {
      firstDigit = this.cardNumber[0];
    }
    if (this.cardNumber[1]) {
      secondDigit = this.cardNumber[1];
    }
    let digitToCheck = firstDigit + secondDigit;
    let visa = digitToCheck.match(/[4]/g);
    let mc = digitToCheck.match(/5[1-5]/g);
    let amex = digitToCheck.match(/(34|37)/g);
    let diners = digitToCheck.match(/[6]/g);
    if (visa !== null) {
      this.enableVisa = true;
      this.enableMC = this.enableAmex = this.enableDiners = false;
    }
    if (mc !== null) {
      this.enableMC = true;
      this.enableVisa = this.enableAmex = this.enableDiners = false;
    }
    if (amex !== null) {
      this.enableAmex = true;
      this.enableVisa = this.enableMC = this.enableDiners = false;
    }
    if (diners !== null) {
      this.enableDiners = true;
      this.enableVisa = this.enableMC = this.enableAmex = false;
    }
    if (mc == null && visa == null && amex == null && diners == null) {
      this.enableVisa = this.enableMC = this.enableAmex = this.enableDiners = false;
    }
  }

  validateCard(cardNumber) {
    let trimmed = String(cardNumber).replace(/[\s]/g, "")
      , length = trimmed.length
      , odd = false
      , total = 0
      , calc
      , calc2;

    if (length === 0) {
      return true;
    }

    if (!/^[0-9]+$/.test(trimmed)) {
      return false;
    }

    for (let i = length; i > 0; i--) {
      calc = parseInt(trimmed.charAt(i - 1));
      if (!odd) {
        total += calc;
      } else {
        calc2 = calc * 2;
        switch (calc2) {
          case 10: calc2 = 1; break;
          case 12: calc2 = 3; break;
          case 14: calc2 = 5; break;
          case 16: calc2 = 7; break;
          case 18: calc2 = 9; break;
          default: calc2 = calc2;
        }
        total += calc2;
      }
      odd = !odd;
    }
    this.cardValid = (total !== 0 && (total % 10) === 0);
  }

}
