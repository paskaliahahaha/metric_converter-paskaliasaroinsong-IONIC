import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appName = 'Metric Converter';
  authorName = 'Paskalia R. Saroinsong';

  selectedMetric: string = '';
  selectedUnitFrom: string = '';
  selectedUnitTo: string = '';
  inputValue: number | null = null;
  resultValue: number | null = null;

  metrics = ['Panjang', 'Massa', 'Suhu'];
  units: { [metric: string]: string[] } = {
    Panjang: ['Meter', 'Centimeter', 'Kilometer'],
    Massa: ['Gram', 'Kilogram', 'Milligram'],
    Suhu: ['Celsius', 'Fahrenheit', 'Kelvin'],
  };

  onMetricChange(event: any) {
    this.selectedMetric = event.detail.value;
    this.selectedUnitFrom = '';
    this.selectedUnitTo = '';
    this.inputValue = null;
    this.resultValue = null;
  }

  onUnitFromChange(event: any) {
    this.selectedUnitFrom = event.detail.value;
  }

  onUnitToChange(event: any) {
    this.selectedUnitTo = event.detail.value;
  }

  convert() {
    if (isNaN(this.inputValue as number)) {
      console.log('Input is not a valid number.');
      return;
    }

    if (this.selectedMetric === 'Panjang') {
      this.performPanjangConversion();
    } else if (this.selectedMetric === 'Massa') {
      this.performMassaConversion();
    } else if (this.selectedMetric === 'Suhu') {
      this.performSuhuConversion();
    }
  }

  performPanjangConversion() {
    const units: { [unit: string]: number } = {
      Meter: 1,
      Centimeter: 100,
      Kilometer: 0.001,
    };

    const conversionFactor =
      units[this.selectedUnitTo] / units[this.selectedUnitFrom];
    this.resultValue = this.inputValue as number * conversionFactor;
  }

  performMassaConversion() {
    const units: { [unit: string]: number } = {
      Gram: 1,
      Kilogram: 0.001,
      Milligram: 1000,
    };

    const conversionFactor =
      units[this.selectedUnitTo] / units[this.selectedUnitFrom];
    this.resultValue = this.inputValue as number * conversionFactor;
  }

  performSuhuConversion() {
    const units: { [unit: string]: number } = {
      Celsius: 1,
      Fahrenheit: 33.8,
      Kelvin: 274.15,
    };

    const conversionFactor =
      units[this.selectedUnitTo] / units[this.selectedUnitFrom];
    this.resultValue = this.inputValue as number * conversionFactor;
  }
}
