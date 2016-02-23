import {Injectable} from 'angular2/core';

@Injectable()
export class TranslateService {

    private defaultLanguage: string;
    private currentLanguage: string;
    private supportLanguages: Object;
    private keys: Object;
    private messages = {
        'error': {
            'setLanguages': 'you are dont set any languages! :-(',
            'setKeys': 'you are dont set any keys! :-(',
            'supportLang': 'is not suport language. We are support:',
            'badKey': 'does not exist key!',
            'translate': '!translate error! :-(',
            'currentLanguage': 'please set currentLanguage'
        }
    }

    constructor() {
        this.setSupportLanguages(this.messages.error.setLanguages);
        this.setKeys(this.messages.error.setKeys);
    }

    getDefaultLanguage(): string {
        return this.defaultLanguage;
    }

    setDefaultLanguage(lang: string) {
        for (let key in this.supportLanguages) {
            if (this.supportLanguages.hasOwnProperty(lang)) {
                this.defaultLanguage = lang;
                return this.currentLanguage;
            }
        }
        console.log(`${lang} ${this.messages.error.supportLang} `, this.supportLanguages)
    }


    getCurrentLanguage(): string {
        return this.currentLanguage;
    }

    setCurrentLanguage(lang: string) {
        for (let key in this.supportLanguages) {
            if (this.supportLanguages.hasOwnProperty(lang)) {
                this.currentLanguage = lang;
                return this.currentLanguage;
            }
        }
        console.log(`${lang} ${this.messages.error.supportLang} `, this.supportLanguages)
    }

    getSupportLanguages(): Object {
        return this.supportLanguages;
    }

    setSupportLanguages(lang: Object) {
        this.supportLanguages = lang
    }

    getKeys(): Object {
        return this.keys
    }

    setKeys(keys: Object) {
        this.keys = keys;
    }

    getTranslate(word: string): string {
        let res = `${this.messages.error.translate}`;
        if (this.currentLanguage) {
            for (let key in this.keys[this.currentLanguage]) {
                if (this.keys[this.currentLanguage].hasOwnProperty(word)) {
                    res = this.keys[this.currentLanguage][word];
                } else if (this.defaultLanguage) {
                    if (this.keys[this.defaultLanguage].hasOwnProperty(word)) {
                        res = this.keys[this.defaultLanguage][word];
                    } else {
                        console.log(`${word} - ${this.messages.error.badKey}`);
                        res = `${this.messages.error.translate}`;
                    }
                } else {
                    console.log(`${word} - ${this.messages.error.badKey}`);
                    res = `${this.messages.error.translate}`;
                }
            }
            return `${res}`;
        }
        console.log(`${this.messages.error.translate} :: ${this.messages.error.currentLanguage}`);
        return `${this.messages.error.translate}`;
    }
}
