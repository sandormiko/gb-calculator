import { Routes, RouterModule } from '@angular/router';

import { CalculationFormComponent } from './calculation/calculation-form.component';
import { CalculationResultComponent } from './calculation/calculation-result.component';
import { CalculationHistoryComponent } from './history/calculation-history.component';

const app_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/calculations/new' },
  { path: 'calculations/new',     component: CalculationFormComponent    },
  {path: 'calculations/:id', component: CalculationResultComponent},
  {path: 'calculations', component: CalculationHistoryComponent}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
