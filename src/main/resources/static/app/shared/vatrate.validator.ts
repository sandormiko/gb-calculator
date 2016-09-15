import { Control } from '@angular/common';

export class VatRateValidator {
     
    static validate(control:Control): any {
        
            let vatRate = control.value;
			if(vatRate === '' || vatRate === -1){
				return {noVatRateGiven :true};
			}
            return null;
    }

}