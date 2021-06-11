import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms'

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  temperatureForm: FormGroup = new FormGroup({
    "celsius-input": new FormControl(''),
    "fahrenheit-input": new FormControl('')
  });
  ngOnInit() {
    this.temperatureForm.controls["celsius-input"].valueChanges.subscribe((data)=>{
      this.inputChangeCelcius("celsius-input");
    })
    this.temperatureForm.controls["fahrenheit-input"].valueChanges.subscribe((data)=>{
      this.inputChangeFahrenheit("fahrenheit-input");
    })
  }

  inputChangeCelcius(fieldName) {
    let celsiusField;
    if(this.temperatureForm) {
      celsiusField = this.temperatureForm.controls["celsius-input"];
    }
    // console.log(this.temperatureForm);
    if(fieldName==="celsius-input" && this.temperatureForm) {
      let celsiusValue = this.temperatureForm.controls["celsius-input"].value;
      let fahrenheitValue = (celsiusValue*9/5) + 32;
      fahrenheitValue = parseFloat(fahrenheitValue.toString().split(".")[0]+"."+fahrenheitValue.toString().split(".")[1][0]);
      console.log(fahrenheitValue);
      this.temperatureForm.controls["fahrenheit-input"].setValue(fahrenheitValue, { emitEvent: false, onlySelf: true }); 
    }
  }

  inputChangeFahrenheit(fieldName) {
    let fahrenheitField;
    if(this.temperatureForm) {
      fahrenheitField = this.temperatureForm.controls["fahrenheit-input"];
    }
    if(fieldName==="fahrenheit-input"  && this.temperatureForm) {
      let fahrenheitValue = this.temperatureForm.controls["fahrenheit-input"].value;
      let celsiusValue = (fahrenheitValue - 32) * 5/9;
      celsiusValue = parseFloat(celsiusValue.toString().split(".")[0]+"."+celsiusValue.toString().split(".")[1][0]);
      console.log(celsiusValue);
      this.temperatureForm.controls["celsius-input"].setValue(celsiusValue, { emitEvent: false, onlySelf: true }); 
    }
  }

}