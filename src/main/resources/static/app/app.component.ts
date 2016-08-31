import { Component } from '@angular/core';
import {CalculationFormComponent} from './calculation/calculation-form.component';

@Component({
  selector: 'my-app',
  template: '<h1>My Second Angular 4 App</h1>4<calculation-form>3</calculation-form>',
  directives : [CalculationFormComponent]
})
export class AppComponent { }
