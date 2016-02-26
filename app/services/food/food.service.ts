import {Injectable} from 'angular2/core';

@Injectable()

export class FoodService {
    getAllFood():Food[] {
        return food;
    }
}

export interface Food {
    id: number;
    name: string;
    calories: number;
    protein: number;
    carbohydrates: number;
    fat: number;
}


let food: Food[] = [
    {
        "id": 1,
        "name": "pizza",
        "calories": 10,
        "protein": 10,
        "carbohydrates": 10,
        "fat": 10
    },
    {
        "id": 2,
        "name": "meet",
        "calories":5,
        "protein": 5,
        "carbohydrates": 5,
        "fat": 5
    },
    {
        "id": 3,
        "name": "patato",
        "calories": 20,
        "protein": 20,
        "carbohydrates": 20,
        "fat": 20
    },
    {
        "id": 4,
        "name": "tomato",
        "calories": 30,
        "protein": 30,
        "carbohydrates": 30,
        "fat": 5
    },
    {
        "id": 5,
        "name": "apple",
        "calories": 5,
        "protein": 10,
        "carbohydrates": 10,
        "fat": 3
    }
]
