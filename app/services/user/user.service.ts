import {Injectable} from 'angular2/core';
import {StorageService} from '../../shared/services/storage/storage.service';

@Injectable()

export class UserService {
    private language: string = 'ru';
    private foodSets: Object = {
        "calories": {
            "full": 2000
        },
        "protein": {
            "full": 150
        },
        "fat": {
            "full": 80
        },
        "carbohydrates": {
            "full": 300
        }
    }

    getLanguage(): string {
        return this.language;
    }

    setLanguage(language: string) {
        this.language = language;
    }

    getUserFoodSets(): Object {
        return this.foodSets;
    }

    setUserCalories(value: number) {
        this.foodSets['calories']['full'] = value;
    }
    setUserProtein(value: number) {
        this.foodSets['protein']['full'] = value;
    }
    setUserFat(value: number) {
        this.foodSets['fat']['full'] = value;
    }
    setUserCarbohydrates(value: number) {
        this.foodSets['carbohydrates']['full'] = value;
    }
}
