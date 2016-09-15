import { AbstractControl,ControlGroup } from '@angular/common';

export class MaxOneAmountValidator {
     
    static validate(group:ControlGroup): any {
        
            let valueAddedTax = group.controls['valueAddedTax'].value;
            let priceInclVat = group.controls['priceInclVat'].value;
            let priceWoVat = group.controls['priceWoVat'].value;

            if (valueAddedTax === '' && priceInclVat === '' && priceWoVat === '') {
                return null;
            }
			
			let amounts = [valueAddedTax,priceInclVat,priceWoVat];
			let nrOfAmountsGiven = amounts.filter((amount)=>amount !== '').length;
            if(nrOfAmountsGiven > 1){
				return {'moreThanOneAmountIsGiven':true};
			}

            return null;
        
    }

}