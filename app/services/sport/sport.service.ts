import {Injectable} from 'angular2/core';
import {StorageService} from '../../shared/services/storage/storage.service';
import {UserService} from '../user/user.service';

@Injectable()

export class SportService {

  private sport: Array<Sport> = sportVendor;
  private userSport: Array<Sport> = []
  private allSport: Array<Sport> = [];
  private storageKeys = {
      'userSport': 'userSport'
  }

  constructor(private _storageService: StorageService, private _userServe: UserService) {
      if (this._storageService.getItem(this.storageKeys.userSport)) {
          this.userSport = this._storageService.getItem(this.storageKeys.userSport);
      }
      this.prepareSport();
  }

  getAllSport(): Sport[] {
      this.prepareSport();
      return this.allSport;
  }

  refreshUserSport() {
      this._storageService.setItem(this.storageKeys.userSport, this.userSport);
  }
  prepareSport() {
      this.allSport.length = 0;
      let container = this.sport.slice();
      if (this.userSport.length) {
          for (let itemUser of this.userSport) {
              for (let itemContainer of container) {
                  if (itemUser.name[this._userServe.getLanguage()].trim() === itemContainer.name[this._userServe.getLanguage()].trim()) {
                      let rem = container.indexOf(itemContainer);
                      container.splice(rem, 1);
                  }
              }
          }
          this.allSport.push(...container, ...this.userSport);
      } else {
          this.allSport.push(...this.sport);
      }
  }

  getUserSport() {
      return this.userSport;
  }

  setUserSport(sport: Sport) {
      for (let item of this.userSport) {
          if (item.name[this._userServe.getLanguage()].trim() === sport.name[this._userServe.getLanguage()].trim()) {
              let rem = this.userSport.indexOf(item);
              this.userSport.splice(rem, 1);
          }
      }
      this.userSport.unshift(sport);
      this.refreshUserSport();
      this.prepareSport();
  }

  removeUserSport(food: Sport) {
      for (let item of this.userSport) {
          if (item.name[this._userServe.getLanguage()].trim() === food.name[this._userServe.getLanguage()].trim()) {
              let rem = this.userSport.indexOf(item);
              this.userSport.splice(rem, 1);
          }
      }
      this.refreshUserSport();
      this.prepareSport();
  }

}

export interface Sport {
    name: Object;
    custom: boolean;
    calories: number;
}


let sportVendor: Sport[] = [
    {
        "name": {
            "en": "bench press",
            "ru": "жим лежа"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "squat",
            "ru": "присед"
        },
        "custom": false,
        "calories": 0

    },
    {
        "name": {
            "en": "pull-up",
            "ru": "подтягивание"
        },
        "custom": false,
        "calories":0
      },
    {
        "name": {
            "en": "deadlift",
            "ru": "становая тяга"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "push ups",
            "ru": "отжимания"
        },
        "custom": false,
        "calories": 0
    }
]
