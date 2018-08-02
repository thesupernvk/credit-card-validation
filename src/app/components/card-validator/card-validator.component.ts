import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-validator',
  templateUrl: './card-validator.component.html',
  styleUrls: ['./card-validator.component.css']
})
export class CardValidatorComponent implements OnInit {

  cardNumber : String = "";
  enableVisa : boolean = false;
  enableMC : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  checkCircuit($event){
    let firstDigit = "";
    let secondDigit = "";
    if(this.cardNumber[0]){
      firstDigit = this.cardNumber[0];
    }
    if(this.cardNumber[1]){
      secondDigit = this.cardNumber[1];
    }
    let digitToCheck = firstDigit+secondDigit;
    let visa = digitToCheck.match(/[4]/g);
    let mc = digitToCheck.match(/5[1-5]/g);
    if(visa!==null){
      this.enableVisa = true;
      this.enableMC = false;
    }
    if(mc!==null){
      this.enableMC = true;
      this.enableVisa = false;
    }
    if(mc==null && visa==null){
      this.enableMC = false;
      this.enableVisa = false;
    }
  }

}
