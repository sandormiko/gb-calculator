import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';
import {CalculationService} from './calculation/calculation.service';

bootstrap(AppComponent, [HTTP_PROVIDERS,CalculationService,
  disableDeprecatedForms(), // disable deprecated forms
  provideForms(), // enable new forms module
]);
