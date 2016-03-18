import {Injectable} from 'angular2/core';
import {StorageService} from '../../shared/services/storage/storage.service';
import {UserService} from '../user/user.service';


@Injectable()

export class FoodService {

    private food: Array<Food> = foodVendor;
    private userFood: Array<Food> = []
    private allFood: Array<Food> = [];
    private userMenu:Array<Menu> = [];
    private storageKeys = {
        'userFood': 'userFood',
        'userMenu': 'userMenu'
    }

    constructor(private _storageService: StorageService, private _userServe: UserService) {
        if (this._storageService.getItem(this.storageKeys.userFood)) {
            this.userFood = this._storageService.getItem(this.storageKeys.userFood);
        }
        if (this._storageService.getItem(this.storageKeys.userMenu)) {
            this.userMenu= this._storageService.getItem(this.storageKeys.userMenu);
        }
        this.prepareFood();

        console.log(this.userMenu);
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
        let container = this.food.slice();
        if (this.userFood.length) {
            for (let itemUser of this.userFood) {
                for (let itemContainer of container) {
                    if (itemUser.name[this._userServe.getLanguage()].trim() === itemContainer.name[this._userServe.getLanguage()].trim()) {
                        let rem = container.indexOf(itemContainer);
                        container.splice(rem, 1);
                    }
                }
            }
            this.allFood.push(...container, ...this.userFood);
        } else {
            this.allFood.push(...this.food);
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

    getUserMenuAll(){
      return this.userMenu;
    }

    getUserMenu(name){
      for (let item of this.userMenu) {
          if (item.name.trim() === name.trim()) {
              return item;
        }

      }
    }

    setUserMenu(name:string, food:Array<Food>){
      for (let item of this.userMenu) {
          if (item.name.trim() === name.trim()) {
              let rem = this.userMenu.indexOf(item);
              this.userMenu.splice(rem, 1);
          }
      }
      this.userMenu.unshift(this.createUserMenu(name, food))
        this.refreshUserMenu()
      console.log(this.userMenu);

    }
    createUserMenu(name:string, food:Array<Food>){
      let  res:Menu=<any>{};
      res['name'] = name;
      res['food'] = food;
      return res;
    }
    removeFoodFromMenu(name:string, index) {
      for (let item of this.userMenu) {
          if (item.name.trim() === name.trim()) {
          item['food'].splice(index, 1)
          }
      }
        this.refreshUserMenu();
    }
    changeFoodInMenu(name:string, index, weight) {
      for (let item of this.userMenu) {
          if (item.name.trim() === name.trim()) {
          item['food'][index]['weight'] = weight
          }
      }
        this.refreshUserMenu();
    }


    refreshUserMenu() {
        this._storageService.setItem(this.storageKeys.userMenu, this.userMenu);
    }

}

export interface Food {
    name: Object;
    custom: boolean;
    calories: number;
    protein: number;
    carbohydrates: number;
    fat: number;
}

export interface Menu {
    name: string;
    food: Array<Food>;
}


let foodVendor: Food[] = [
//1
{
  "name": {
    "en": "Сhicken egg",
    "ru": "Яйцо куриное"
  },
  "custom": false,
  "calories": 157,
  "protein": 12.7,
  "fat": 10.9,
  "carbohydrates": 0.7
},
// 2
{
  "name": {
    "en": "Apricot",
    "ru": "Абрикос"
  },
  "custom": false,
  "calories": 41,
  "protein": 0.9,
  "fat": 0.1,
  "carbohydrates": 10.8
},
// 3
{
  "name": {
    "en": "Adjika",
    "ru": "Аджика"
  },
  "custom": false,
  "calories": 59,
  "protein": 1.0,
  "fat": 3.7,
  "carbohydrates": 5.8
},
// 4
{
  "name": {
    "en": "Quince",
    "ru": "Айва"
  },
  "custom": false,
  "calories": 40,
  "protein": 0.6,
  "fat": 0.5,
  "carbohydrates": 9.8
},
// 5
{
  "name": {
    "en": "Cherry-plum",
    "ru": "Алыча"
  },
  "custom": false,
  "calories": 27,
  "protein": 0.2,
  "fat": 0.0,
  "carbohydrates": 6.9
},
// 6
{
  "name": {
    "en": "Pineapple",
    "ru": "Ананас"
  },
  "custom": false,
  "calories": 49,
  "protein": 0.4,
  "fat": 0.2,
  "carbohydrates": 10.6
},
// 7
{
  "name": {
    "en": "Curd bold",
    "ru": "Творог полужирный"
  },
  "custom": false,
  "calories": 159,
  "protein": 16.7,
  "fat": 9.0,
  "carbohydrates": 2.0
},
// 8
{
  "name": {
    "en": "Skim cheese",
    "ru": "Творог обезжиренный"
  },
  "custom": false,
  "calories": 71,
  "protein": 16.5,
  "fat": 0.0,
  "carbohydrates": 1.3
},
// 9
{
  "name": {
    "en": "Chicken cutlet",
    "ru": "Куриная котлета"
  },
  "custom": false,
  "calories": 108.2,
  "protein": 17,
  "fat": 3.7,
  "carbohydrates": 1.8
},
// 10
{
  "name": {
    "en": "Chicken cue",
    "ru": "Куриный биток"
  },
  "custom": false,
  "calories": 128.7,
  "protein": 21.3,
  "fat": 3.1,
  "carbohydrates": 2.4
},
// 11
{
  "name": {
    "en": "Fried chicken",
    "ru": "Курица жареная"
  },
  "custom": false,
  "calories": 210,
  "protein": 26.0,
  "fat": 12.0,
  "carbohydrates": 0.0
},
// 12
{
  "name": {
    "en": "Boiled chicken",
    "ru": "Курица вареная"
  },
  "custom": false,
  "calories": 170,
  "protein": 25.2,
  "fat": 7.4,
  "carbohydrates": 0.0
},
// 13
{
  "name": {
    "en": "White rice",
    "ru": "Рис белый"
  },
  "custom": false,
  "calories": 116,
  "protein": 2.2,
  "fat": 0.5,
  "carbohydrates": 24.9
},
// 14
{
  "name": {
    "en": "Oatmeal on the water",
    "ru": "Овсяная каша на воде"
  },
  "custom": false,
  "calories": 88,
  "protein": 3.0,
  "fat": 1.7,
  "carbohydrates": 15.0
},
// 15
{
  "name": {
    "en": "Semolina with milk",
    "ru": "Манная каша на молоке"
  },
  "custom": false,
  "calories": 98,
  "protein": 3.0,
  "fat": 3.2,
  "carbohydrates": 15.3
},
// 16
{
  "name": {
    "en": "Semolina water",
    "ru": "Манная каша на воде"
  },
  "custom": false,
  "calories": 80,
  "protein": 2.5,
  "fat": 0.2,
  "carbohydrates": 16.8
},
// 17
{
  "name": {
    "en": "Buckwheat porridge with milk",
    "ru": "Гречневая каша на молоке"
  },
  "custom": false,
  "calories": 118,
  "protein": 4.2,
  "fat": 2.3,
  "carbohydrates": 21.6
},
// 18
{
  "name": {
    "en": "Buckwheat",
    "ru": "Гречневая каша"
  },
  "custom": false,
  "calories": 132,
  "protein": 4.5,
  "fat": 2.3,
  "carbohydrates": 25.0
},
// 19
{
  "name": {
    "en": "Barley porridge",
    "ru": "Перловая каша"
  },
  "custom": false,
  "calories": 106,
  "protein": 3.1,
  "fat": 0.4,
  "carbohydrates": 23.0
},
// 20
{
  "name": {
    "en": "Millet porridge",
    "ru": "Пшенная каша"
  },
  "custom": false,
  "calories": 135,
  "protein": 4.7,
  "fat": 1.1,
  "carbohydrates": 26.1
},
// 21
{
  "name": {
    "en": "Rice brown",
    "ru": "Рис бурый"
  },
  "custom": false,
  "calories": 337,
  "protein": 7.4,
  "fat": 1.8,
  "carbohydrates": 72.9
},
// 22
{
  "name": {
    "en": "Barley porridge",
    "ru": "Ячменная каша"
  },
  "custom": false,
  "calories": 310,
  "protein": 11.5,
  "fat": 2.0,
  "carbohydrates": 65.8
},
// 23
{
  "name": {
    "en": "Milk",
    "ru": "Молоко"
  },
  "custom": false,
  "calories": 64,
  "protein": 3.2,
  "fat": 3.6,
  "carbohydrates": 4.8
},
// 24
{
  "name": {
    "en": "Borscht",
    "ru": "Борщ"
  },
  "custom": false,
  "calories": 49,
  "protein": 1.1,
  "fat": 2.2,
  "carbohydrates": 6.7
},
// 25
{
  "name": {
    "en": "Chicken broth",
    "ru": "Бульон куриный"
  },
  "custom": false,
  "calories": 15,
  "protein": 2.0,
  "fat": 0.5,
  "carbohydrates": 0.3
},
// 26
{
  "name": {
    "en": "Pickle",
    "ru": "Рассольник"
  },
  "custom": false,
  "calories": 42,
  "protein": 1.4,
  "fat": 2.0,
  "carbohydrates": 5.0
},
// 27
{
  "name": {
    "en": "Meat solyanka",
    "ru": "Солянка мясная"
  },
  "custom": false,
  "calories": 69,
  "protein": 5.2,
  "fat": 4.6,
  "carbohydrates": 1.7
},
// 28
{
  "name": {
    "en": "Mushroom soup",
    "ru": "Суп грибной"
  },
  "custom": false,
  "calories": 50,
  "protein": 1.9,
  "fat": 2.4,
  "carbohydrates": 5.7
},
// 29
{
  "name": {
    "en": "Vegetable soup",
    "ru": "Суп овощной"
  },
  "custom": false,
  "calories": 43,
  "protein": 1.7,
  "fat": 1.8,
  "carbohydrates": 6.2
},
// 30
{
  "name": {
    "en": "Fish soup",
    "ru": "Уха"
  },
  "custom": false,
  "calories": 46,
  "protein": 3.4,
  "fat": 1.0,
  "carbohydrates": 5.5
},
// 31
{
  "name": {
    "en": "Dutch cheese",
    "ru": "Сыр Голландский"
  },
  "custom": false,
  "calories": 352,
  "protein": 26.0,
  "fat": 26.8,
  "carbohydrates": 0.0
},
// 32
{
  "name": {
    "en": "Cheese Russian",
    "ru": "Сыр Российский"
  },
  "custom": false,
  "calories": 363,
  "protein": 24.1,
  "fat": 29.5,
  "carbohydrates": 0.3
},
// 33
{
  "name": {
    "en": "Sulguni cheese",
    "ru": "Сыр сулугуни"
  },
  "custom": false,
  "calories": 290,
  "protein": 20.0,
  "fat": 24.0,
  "carbohydrates": 0.0
},
// 34
{
  "name": {
    "en": "Chees feta",
    "ru": "Сыр фета"
  },
  "custom": false,
  "calories": 290,
  "protein": 17.0,
  "fat": 24.0,
  "carbohydrates": 0.0
},
// 35
{
  "name": {
    "en": "Boiled chicken fillet",
    "ru": "Куриное филе вареное"
  },
  "custom": false,
  "calories": 137,
  "protein": 29.8,
  "fat": 1.8,
  "carbohydrates": 0.5
},
// 36
{
  "name": {
    "en": "Pork chops",
    "ru": "Свинные отбивные"
  },
  "custom": false,
  "calories": 470,
  "protein": 17.5,
  "fat": 40.3,
  "carbohydrates": 8.8
},
// 37
{
  "name": {
    "en": "Beef Cutlets",
    "ru": "Котлеты из говядины"
  },
  "custom": false,
  "calories": 260,
  "protein": 18.0,
  "fat": 20.0,
  "carbohydrates": 0.0
},
// 38
{
  "name": {
    "en": "Cooked turkey",
    "ru": "Индейка вареная"
  },
  "custom": false,
  "calories": 195,
  "protein": 25.3,
  "fat": 10.4,
  "carbohydrates":  0.0
},
// 39
{
  "name": {
    "en": "Roasted turkey",
    "ru": "Индейка жареная"
  },
  "custom": false,
  "calories": 165,
  "protein": 28.0,
  "fat": 6.0,
  "carbohydrates": 0
},
// 40
{
  "name": {
    "en": "Beef liver fried",
    "ru": "Говяжья печень жареная"
  },
  "custom": false,
  "calories": 199,
  "protein": 22.9,
  "fat": 10.2,
  "carbohydrates": 3.9
},
// 41
{
  "name": {
    "en": "Beef stew",
    "ru": "Говядина тушеная"
  },
  "custom": false,
  "calories": 232,
  "protein": 16.8,
  "fat": 18.3,
  "carbohydrates": 0.0
},
// 42
{
  "name": {
    "en": "Boiled beef",
    "ru": "Говядина вареная"
  },
  "custom": false,
  "calories": 254,
  "protein": 25.8,
  "fat": 16.8,
  "carbohydrates": 0.0
},
// 43
{
  "name": {
    "en": "Ham",
    "ru": "Ветчина"
  },
  "custom": false,
  "calories": 270,
  "protein": 14.0,
  "fat": 24.0,
  "carbohydrates": 0.0
},

// 44
{
  "name": {
    "en": "Fat",
    "ru": "Cало"
  },
  "custom": false,
  "calories": 797,
  "protein": 2.4,
  "fat": 89.0,
  "carbohydrates": 0.0
},
// 45
{
  "name": {
    "en": "Canned meat",
    "ru": "Паштет мясной"
  },
  "custom": false,
  "calories": 170,
  "protein": 15.0,
  "fat": 11.0,
  "carbohydrates": 0.0
},
// 46
{
  "name": {
    "en": "Boiled chicken",
    "ru": "Курица вареная"
  },
  "custom": false,
  "calories": 170,
  "protein": 25.2,
  "fat": 7.4,
  "carbohydrates": 0.0
},
// 47
{
  "name": {
    "en": "Fried chicken",
    "ru": "Курица жареная"
  },
  "custom": false,
  "calories": 210,
  "protein": 26.0,
  "fat": 12.0,
  "carbohydrates": 0.0
},
// 48
{
  "name": {
    "en": "French fries",
    "ru": "Картофель фри"
  },
  "custom": false,
  "calories": 170.1,
  "protein": 1.8,
  "fat": 11.4,
  "carbohydrates": 16
},
// 49
{
  "name": {
    "en": "Potatoes baked with herbs",
    "ru": "Картофель печеный с травами"
  },
  "custom": false,
  "calories": 87.2,
  "protein": 2.1,
  "fat": 1.4,
  "carbohydrates": 17.7
},
// 50
{
  "name": {
    "en": "Pumpkin pancakes",
    "ru": "Кабачковые оладьи"
  },
  "custom": false,
  "calories": 55.8,
  "protein": 1.6,
  "fat": 1.7,
  "carbohydrates": 8.5
},
// 51
{
  "name": {
    "en": "Pizza Margarita",
    "ru": "Пицца Маргарита"
  },
  "custom": false,
  "calories": 208,
  "protein": 10.5,
  "fat": 9,
  "carbohydrates": 24
},
// 52
{
  "name": {
    "en": "Coffee",
    "ru": "Кофе"
  },
  "custom": false,
  "calories": 20.2,
  "protein": 1.3,
  "fat": 0.4,
  "carbohydrates": 2.9
},
// 53
{
  "name": {
    "en": "Roast pork with potatoes",
    "ru": "Жаркое из свинины с картошкой"
  },
  "custom": false,
  "calories": 76.4,
  "protein": 2.1,
  "fat": 2.6,
  "carbohydrates": 12
},
// 54
{
  "name": {
    "en": "Pilaf",
    "ru": "плов"
  },
  "custom": false,
  "calories": 193.8,
  "protein": 8.1,
  "fat": 7.6,
  "carbohydrates": 24
},
// 55
{
  "name": {
    "en": "Pelmeni",
    "ru": "Пельмени"
  },
  "custom": false,
  "calories": 275,
  "protein": 11.9,
  "fat": 12.4,
  "carbohydrates": 29.0
},
// 56
{
  "name": {
    "en": "Black tea without sugar",
    "ru": "Чай черный без сахара"
  },
  "custom": false,
  "calories": 0,
  "protein": 0.1,
  "fat": 0.0,
  "carbohydrates": 0.0
},
// 57
{
  "name": {
    "en": "Butter",
    "ru": "масло сливочное"
  },
  "custom": false,
  "calories": 748,
  "protein": 0.5,
  "fat": 82.5,
  "carbohydrates": 0.8
},
// 58
{
  "name": {
    "en": "Bread",
    "ru": "Хлеб"
  },
  "custom": false,
  "calories": 198,
  "protein": 6.6,
  "fat": 1.2,
  "carbohydrates": 39.6
},
// 59
{
  "name": {
    "en": "Spaghetti",
    "ru": "Спагетти"
  },
  "custom": false,
  "calories": 344,
  "protein": 10.4,
  "fat": 1.1,
  "carbohydrates": 71.5
},
// 60
{
  "name": {
    "en": "Pasta carbonara",
    "ru": "Паста карбонара"
  },
  "custom": false,
  "calories": 346.5,
  "protein": 16.4,
  "fat": 18.7,
  "carbohydrates": 26.8
},
// 61
{
  "name": {
    "en": "Сabbage rolls",
    "ru": "Голубцы"
  },
  "custom": false,
  "calories": 93.2,
  "protein": 4.7,
  "fat": 5.2,
  "carbohydrates": 8
},
// 62
{
  "name": {
    "en": "Greek salad",
    "ru": "Греческий салат"
  },
  "custom": false,
  "calories": 91,
  "protein": 2.8,
  "fat": 6.7,
  "carbohydrates": 4.1
},
// 63
{
  "name": {
    "en": "Fish steak",
    "ru": "Рыбный стейк"
  },
  "custom": false,
  "calories": 155,
  "protein": 12.8,
  "fat": 6.0,
  "carbohydrates": 12.0
},
// 64
{
  "name": {
    "en": "Pork steak",
    "ru": "Стейк из свинины"
  },
  "custom": false,
  "calories": 343,
  "protein": 13.6,
  "fat": 31.9,
  "carbohydrates": 0
},
// 65
{
  "name": {
    "en": "Rabbit stewed in cream",
    "ru": "Кролик тушеный в сметане"
  },
  "custom": false,
  "calories": 122.2,
  "protein": 12.2,
  "fat": 7.3,
  "carbohydrates": 1.9
},
// 66
{
  "name": {
    "en": "Potato pancakes",
    "ru": "Деруны"
  },
  "custom": false,
  "calories": 105.7,
  "protein": 2.8,
  "fat": 2.7,
  "carbohydrates": 18.5
},
// 67
{
  "name": {
    "en": "Sausage",
    "ru": "Сосиски"
  },
  "custom": false,
  "calories": 304,
  "protein": 9.0,
  "fat": 29.5,
  "carbohydrates": 0.7
},
// 68
{
  "name": {
    "en": "Omelette",
    "ru": "Яичница"
  },
  "custom": false,
  "calories": 170.3,
  "protein": 12.5,
  "fat": 12.5,
  "carbohydrates": 0.7
},
// 69
{
  "name": {
    "en": "Herring",
    "ru": "Сельдь"
  },
  "custom": false,
  "calories": 217,
  "protein": 19.8,
  "fat": 15.4,
  "carbohydrates": 0.0
},
// 70
{
  "name": {
    "en": "Braised cabbage",
    "ru": "Тушеная капуста"
  },
  "custom": false,
  "calories": 68.3,
  "protein": 1.8,
  "fat": 4.7,
  "carbohydrates": 4.6
},
// 71
{
  "name": {
    "en": "Mashed potatoes",
    "ru": "Картофельное пюре"
  },
  "custom": false,
  "calories": 106,
  "protein": 2.5,
  "fat": 4.2,
  "carbohydrates": 14.7
},
// 72
{
  "name": {
    "en": "Fried potato",
    "ru": "Картофель жареный"
  },
  "custom": false,
  "calories": 192,
  "protein": 2.8,
  "fat": 9.5,
  "carbohydrates": 23.4
},
// 73
{
  "name": {
    "en": "Fishcake",
    "ru": "Рыбные котлеты"
  },
  "custom": false,
  "calories": 85.5,
  "protein": 12.1,
  "fat": 1.1,
  "carbohydrates":  6.6
},
//74
{
  "name": {
    "en": "Pork cutlets",
    "ru": "Котлеты свиные"
  },
  "custom": false,
  "calories": 233.3,
  "protein": 12.4,
  "fat": 18.5,
  "carbohydrates":  3.5
},
// 75
{
  "name": {
    "en": "Chicken liver fried",
    "ru": "Куриная печень жареная"
  },
  "custom": false,
  "calories": 120.5,
  "protein": 13.1,
  "fat": 6.5,
  "carbohydrates":  2.6
},
// 76
{
  "name": {
    "en": "Liver pork roast",
    "ru": "Печень свиная жареная"
  },
  "custom": false,
  "calories": 218.5,
  "protein": 18.9,
  "fat": 12.9,
  "carbohydrates":  6.6
},
// 77
{
  "name": {
    "en": "Julienne with chicken and mushrooms",
    "ru": "Жульен с курицей и грибами"
  },
  "custom": false,
  "calories": 150.6,
  "protein": 13,
  "fat": 9,
  "carbohydrates":  3.8
},
// 78
{
  "name": {
    "en": "Turkey breast",
    "ru": "Филе индейки"
  },
  "custom": false,
  "calories": 84,
  "protein": 19.2,
  "fat": 0.7,
  "carbohydrates":  0
},
// 79
{
  "name": {
    "en": "Turkey stuffing",
    "ru": "Фарш индейки"
  },
  "custom": false,
  "calories": 161,
  "protein": 20,
  "fat": 8,
  "carbohydrates":  0.5
},
// 80
{
  "name": {
    "en": " Belarus bread",
    "ru": "Хлеб беларусский"
  },
  "custom": false,
  "calories": 226,
  "protein": 6.3,
  "fat": 1.2,
  "carbohydrates": 47.5
},
// 81
{
  "name": {
    "en": "Pasta",
    "ru": "Макароны"
  },
  "custom": false,
  "calories": 371,
  "protein": 13,
  "fat": 1.5,
  "carbohydrates": 75
}
]
