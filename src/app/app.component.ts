import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';
  numberData: string = '';
  result: any;
  constructor() {}
  calculate() {
    // console.log('dbn,jskds');
    try {
      this.result = this.add(this.numberData.toString());
    } catch (error: any) {
      console.log(error.message);
    }
  }
  add(numbers: any) {
    if (numbers === '') {
      return 0;
    }
    let numbersString = numbers.toString();
    numbersString = numbersString.match(/\d+/g).map(Number);
    const negativeNumbers = numbersString.filter((num: any) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        `Negative numbers not allowed: ${negativeNumbers.join(', ')}`
      );
    }
    return numbersString.reduce((sum: any, num: any) => sum + num, 0);
  }
}
