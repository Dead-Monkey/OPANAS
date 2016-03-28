import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'round',
    pure: false
})

export class RoundPipe implements PipeTransform {

    transform(value): any {
        if (value) {

      return Math.round(value)
        }
    }
}
