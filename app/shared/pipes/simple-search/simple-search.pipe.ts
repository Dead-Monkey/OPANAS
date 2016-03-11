import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'simpleSearch',
    pure: false
})

export class SimpleSearch implements PipeTransform {

    transform(value, [field, field2, letter]: [string, string, string]): any {
        if (letter) {
            if (field2) {
                return value.filter((item) => item[field][field2].toLowerCase().includes(letter.toLowerCase()))
            } else {
                return value.filter((item) => item[field].toLowerCase().includes(letter.toLowerCase()))
            }
        }
    }
}
