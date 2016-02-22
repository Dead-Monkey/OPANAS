import {Injectable} from 'angular2/core';

@Injectable()
export class TranslateService {

    private defaultLenguage: string = 'en';
    private language: string = 'en';
    private keys: Object = keysVendor;

    setLanguage(lang: string): string {
        this.language = lang;
        return this.language;
    }

    getTranslate(word: string): string {

        let res = ''

        for (let key in this.keys[this.language]) {
            if (this.keys[this.language].hasOwnProperty(word)) {
                res = this.keys[this.language][word];
            }
        }
        return `${res}`;
    }
}

let keysVendor: Object = {

    'en': {
        'opanas.router.food': 'food',
        'opanas.router.sport': 'sport',
        'opanas.router.rest': 'food'
    },

    'ru': {
        'opanas.router.food': 'еда',
        'opanas.router.sport': 'спорт',
        'opanas.router.rest': 'отдых'
    }
}
