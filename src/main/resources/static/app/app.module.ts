import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { app_routing } from './app.routing';
import {CalculationService} from './calculation/calculation.service';
import {HistoryService} from './history/history.service';
import {HTTP_PROVIDERS} from '@angular/http';
import { CalculationResultComponent } from './calculation/calculation-result.component';
import { CalculationHistoryComponent } from './history/calculation-history.component';
import { CalculatedTodayComponent } from './history/calculated-today.component';
import { CalculatedOlderComponent } from './history/calculated-older.component';
import { SavedOlderComponent } from './history/saved-older.component';
import { SavedTodayComponent } from './history/saved-today.component';
import {CalculationFormComponent} from './calculation/calculation-form.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, app_routing],
    declarations: [AppComponent,
        CalculationFormComponent, CalculationResultComponent, CalculationHistoryComponent,
        CalculatedTodayComponent, CalculatedOlderComponent,
        SavedOlderComponent, SavedTodayComponent],
    providers: [HTTP_PROVIDERS, CalculationService, HistoryService],
    bootstrap: [AppComponent]
})
export class AppModule { }
