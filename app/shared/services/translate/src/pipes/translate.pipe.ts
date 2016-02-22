import {Pipe, PipeTransform} from 'angular2/core';
import {TranslateService} from '../services/translate.service';

@Pipe({
    name: 'translate',
    pure: false
})

export class TranslatePipe implements PipeTransform {

    constructor(private _translator: TranslateService) { }

    transform(value: string, args: string[]): any {

            return this._translator.getTranslate(value);

    }
}
