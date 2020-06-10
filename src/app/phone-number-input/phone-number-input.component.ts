import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-number-input',
  templateUrl: './phone-number-input.component.html',
  styleUrls: ['./phone-number-input.component.css']
})
export class PhoneNumberInputComponent implements OnInit {

  phoneNumber = new FormControl(null, [
    Validators.required,
    Validators.pattern(/^(\d{7})(\d{3})?$/)
  ]);

  @Output() onGenerate: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }


  onSubmitForm() {
    let phoneNumber = this.phoneNumber.value;
    if (phoneNumber) {
      this.onGenerate.emit(this.phoneNumber.value);
      this.phoneNumber.reset();
    }

  }

}
