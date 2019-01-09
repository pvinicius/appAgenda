import { FormControl } from '@angular/forms';

export class CustomValidator {
    static EmailValidator(control: FormControl) {
        var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!regex.test(control.value))
            return { "Email inválido": true }
        else
            return null;
    }
}