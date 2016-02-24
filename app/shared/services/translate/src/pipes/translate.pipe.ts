import {Pipe, PipeTransform} from 'angular2/core';
import {TranslateService} from '../services/translate.service';

@Pipe({
    name: 'translate'
    // pure: false
    //uncomment 4 live reload translate (it's will be eat some resource)
})

export class TranslatePipe implements PipeTransform {

    constructor(private _translator: TranslateService) { }

    transform(value: string, args: string[]): any {

            return this._translator.getTranslate(value);

    }
}
