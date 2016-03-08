import {Injectable} from 'angular2/core';
import {StorageService} from '../../shared/services/storage/storage.service';
import {UserService} from '../user/user.service';

@Injectable()

export class FoodService {

    private food: Array<Food> = foodVendor;
    private userFood: Array<Food> = []
    private allFood: Array<Food> = [];
    private storageKeys = {
        'userFood': 'userFood'
    }

    constructor(private _storageService: StorageService, private _userServe:UserService) {
        if (this._storageService.getItem(this.storageKeys.userFood)) {
            this.userFood = this._storageService.getItem(this.storageKeys.userFood);
        }
        this.prepareFood();
    }

    getAllFood(): Food[] {
        this.prepareFood();
        return this.allFood;
    }

    refreshUserFood() {
        this._storageService.setItem(this.storageKeys.userFood, this.userFood);
    }

    prepareFood() {
        this.allFood.length = 0;
        for (let itemFood of this.food) {
            if (this.userFood.length) {
                for (let itemUser of this.userFood) {
                    if (itemUser.name[this._userServe.getLanguage()].trim() === itemFood.name[this._userServe.getLanguage()].trim()) {
                        this.allFood.push(itemUser);
                    } else {
                        this.allFood.push(itemFood)
                    }
                }
            } else {
                this.allFood.push(itemFood)
            }
        }
    }


    getUserFood() {
        return this.userFood;
    }

    setUserFood(food: Food) {
        for (let item of this.userFood) {
            if (item.name[this._userServe.getLanguage()].trim() === food.name[this._userServe.getLanguage()].trim()) {
                let rem = this.userFood.indexOf(item);
                this.userFood.splice(rem, 1);
            }
        }
        this.userFood.push(food);
        this.refreshUserFood();
        this.prepareFood();
    }

    removeUserFood(food: Food) {
        for (let item of this.userFood) {
            if (item.name[this._userServe.getLanguage()].trim() === food.name[this._userServe.getLanguage()].trim()) {
                let rem = this.userFood.indexOf(item);
                this.userFood.splice(rem, 1);
            }
        }
        this.refreshUserFood();
        this.prepareFood();
    }
}

export interface Food {
    id: number;
    name: Object;
    custom: boolean;
    calories: number;
    protein: number;
    carbohydrates: number;
    fat: number;
}


let foodVendor: Food[] = [
    {
        "id": 1,
        "name": {
          "en":"pizza",
          "ru":"пицца"
        },
        "custom": false,
        "calories": 10,
        "protein": 10,
        "carbohydrates": 10,
        "fat": 10
    },
    {
        "id": 2,
        "name": {
          "en":"apple",
          "ru":"яблоко"
        },
        "custom": false,
        "calories": 5,
        "protein": 5,
        "carbohydrates": 5,
        "fat": 5
    },
    {
        "id": 3,
        "name": {
          "en":"tomato",
          "ru":"помидор"
        },
        "custom": false,
        "calories": 20,
        "protein": 20,
        "carbohydrates": 20,
        "fat": 20
    },
    {
        "id": 4,
        "name": {
          "en":"potato",
          "ru":"картофан"
        },
        "custom": false,
        "calories": 20,
        "protein": 20,
        "carbohydrates": 20,
        "fat": 20
    },
    {
        "id": 5,
        "name": {
          "en":"niceThing",
          "ru":"ништяк"
        },
        "custom": false,
        "calories": 12,
        "protein": 12,
        "carbohydrates": 11,
        "fat": 10
    }
]
