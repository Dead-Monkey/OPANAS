import {Injectable} from 'angular2/core';
import {StorageService} from '../../shared/services/storage/storage.service';

@Injectable()

export class UserService {
    private storageKeys = {
        'userSets': 'userSets'
    }
    private sets:  Object = {
          'foodSets': {
               "calories": {
                   "full": 0
               },
               "protein": {
                   "full": 0
               },
               "fat": {
                   "full": 0
               },
               "carbohydrates": {
                   "full": 0
               }
            },
            'sportSets':{},
            'language':'en'
      }

    constructor(private _storageService: StorageService) {
        if (this._storageService.getItem(this.storageKeys['userSets'])) {
            this.sets = this._storageService.getItem(this.storageKeys['userSets']);
        }
    }

    refreshUser(){

      for (let key in this.sets['foodSets']) {
          if(!this.sets['foodSets'][key]['full']){
            this.sets['foodSets'][key]['full'] = 0;
          }
      }
      this._storageService.setItem(this.storageKeys['userSets'], this.sets);
    }

    getLanguage(): string {
        return this.sets['language'];
    }

    setLanguage(language: string) {
        this.sets['language'] = language;
        this.refreshUser();
    }

    getUserSets(): Object {
        return this.sets;
    }

    setUserCalories(value: number) {
        this.sets['foodSets']['calories']['full'] = value;
        this.refreshUser();
    }
    setUserProtein(value: number) {
        this.sets['foodSets']['protein']['full'] = value;
        this.refreshUser();
    }
    setUserFat(value: number) {
        this.sets['foodSets']['fat']['full'] = value;
        this.refreshUser();
    }
    setUserCarbohydrates(value: number) {
        this.sets['foodSets']['carbohydrates']['full'] = value;
        this.refreshUser();
    }

}
