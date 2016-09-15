import { AbstractControl,ControlGroup } from '@angular/common';

export class MinOneAmountValidator {
     
    static validate(group:ControlGroup): any {
        
            let valueAddedTax = group.controls['valueAddedTax'].value;
            let priceInclVat = group.controls['priceInclVat'].value;
            let priceWoVat = group.controls['priceWoVat'].value;

            if (valueAddedTax === '' && priceInclVat === '' && priceWoVat === '') {
                return {'noAmountIsGiven':true};
            }
			
			return null;
    }

}