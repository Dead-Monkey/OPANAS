import {Injectable} from 'angular2/core';
import {StorageService} from '../../shared/services/storage/storage.service';

@Injectable()

export class UserService {
    private storageKeys = {
        'userSets': 'userSets'
    }
    private sets: Object = {
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
        'sportSets': {},
        'age': '',
        'weight': '',
        'height': '',
        'sex': 'male',
        'activity': '',
        'goal': '',
        'language': 'en'
    }

    constructor(private _storageService: StorageService) {
        if (this._storageService.getItem(this.storageKeys['userSets'])) {
            this.sets = this._storageService.getItem(this.storageKeys['userSets']);
        }
    }

    refreshUser() {

        for (let key in this.sets['foodSets']) {
            if (!this.sets['foodSets'][key]['full']) {
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

    setUserAge(value: number) {
        if (!value) {
            value = 0
        }
        this.sets['age'] = value;
        this.refreshUser();
    }
    setUserSex(value: string) {
        if (!(value === 'male' || value === 'female')) {
            value = 'male'
        }
        this.sets['sex'] = value;
        this.refreshUser();
    }
    setUserWeight(value: number) {
        if (!value) {
            value = 0
        }
        this.sets['weight'] = value;
        this.refreshUser();
    }
    setUserHeight(value: number) {
        if (!value) {
            value = 0
        }
        this.sets['height'] = value;
        this.refreshUser();
    }
    setUserActivity(value: number) {
        if (!value) {
            value = 0
        }
        this.sets['activity'] = value;
        this.refreshUser();
    }
    setUserGoal(value: number) {
        if (!value) {
            value = 0
        }
        this.sets['goal'] = value;
        this.refreshUser();
    }
    setUserCalories(value: number) {
        if (!value) {
            value = 0
        }
        this.sets['foodSets']['calories']['full'] = value;
        this.refreshUser();
    }
    setUserProtein(value: number) {
        if (!value) {
            value = 0
        }
        this.sets['foodSets']['protein']['full'] = value;
        this.refreshUser();
    }
    setUserFat(value: number) {
        if (!value) {
            value = 0
        }
        this.sets['foodSets']['fat']['full'] = value;
        this.refreshUser();
    }
    setUserCarbohydrates(value: number) {
        if (!value) {
            value = 0
        }
        this.sets['foodSets']['carbohydrates']['full'] = value;
        this.refreshUser();
    }

    calculateUserDailyRate(sex: string, age: number, weight: number, height: number, activity: number, goal: number) {
        let kcal;
        this.setUserSex(sex)
        this.setUserAge(age)
        this.setUserWeight(weight)
        this.setUserHeight(height)
        this.setUserActivity(activity)
        this.setUserGoal(goal)
        if (sex === 'male') {
            kcal = 10 * this.sets['weight'] + 6.25 * this.sets['height'] - 5 * this.sets['age'] + 5
        } else if (sex === 'female') {
            kcal = 10 * this.sets['weight'] + 6.25 * this.sets['height'] - 5 * this.sets['age'] - 161
        }
        kcal = kcal * activity * goal;
        this.setUserCalories(kcal)
        this.setUserProtein(weight * 1.8)
        this.setUserFat(weight)
        this.setUserCarbohydrates((kcal - this.sets['foodSets']['protein']['full'] * 4 - this.sets['foodSets']['fat']['full'] * 9) / 4)
    }

}
