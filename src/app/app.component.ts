import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fibonacci';
  fibonacciForm = new FormGroup({
    number: new FormControl('', Validators.required),
  });

  result?: number = undefined;

  calculateFibonacci() {
    let value = this.fibonacciForm.get('number')?.value;
    if (value == 0) {
      this.result = 0;
    }

    if (value == 1) {
      this.result = 1;
    }

    let fibonacci = [0, 1];
    for (let i = 1; i < value; i++) {
      fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    }

    this.result = fibonacci[value];
  }
}
