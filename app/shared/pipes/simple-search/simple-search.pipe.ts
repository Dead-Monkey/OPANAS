import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'simpleSearch',
    pure: false
})

export class SimpleSearch implements PipeTransform {

    transform(value, [field, letter]:[string,string]): any {

        return value.filter((item) => item[field].includes(letter))
    }
}
