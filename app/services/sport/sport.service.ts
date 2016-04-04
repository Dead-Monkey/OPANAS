import {Injectable} from 'angular2/core';
import {StorageService} from '../../shared/services/storage/storage.service';
import {UserService} from '../user/user.service';

@Injectable()

export class SportService {

    private sport: Array<Sport> = sportVendor;
    private userSport: Array<Sport> = []
    private allSport: Array<Sport> = [];
    private userTrain: Array<Train> = [];
    private storageKeys = {
        'userSport': 'userSport',
        'userTrain': 'userTrain'
    }

    constructor(private _storageService: StorageService, private _userServe: UserService) {
        if (this._storageService.getItem(this.storageKeys.userSport)) {
            this.userSport = this._storageService.getItem(this.storageKeys.userSport);
        }
        if (this._storageService.getItem(this.storageKeys.userTrain)) {
            this.userTrain= this._storageService.getItem(this.storageKeys.userTrain);
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















    getUserTrainAll() {
        return this.userTrain;
    }

    getUserTrain(name) {
        for (let item of this.userTrain) {
            if (item.name.trim() === name.trim()) {
                return item;
            }
        }
    }

    setUserTrain(name: string, sport: Array<Sport>) {
        for (let item of this.userTrain) {
            if (item.name.trim() === name.trim()) {
                let rem = this.userTrain.indexOf(item);
                this.userTrain.splice(rem, 1);
            }
        }
        this.userTrain.unshift(this.createUserTrain(name, sport))
        this.refreshUserTrain()
    }
    createUserTrain(name: string, sport: Array<Sport>) {
        let res:Train = <any>{};
        res['name'] = name;
        res['sport'] = sport;
        return res;
    }
    removeTrain(name: string) {
        for (let item of this.userTrain) {
            if (item.name.trim() === name.trim()) {
                this.userTrain.splice(this.userTrain.indexOf(item), 1)
            }
        }
        this.refreshUserTrain()

    }
    removeSportFromTrain(name: string, index) {
        for (let item of this.userTrain) {
            if (item.name.trim() === name.trim()) {
                item['sport'].splice(index, 1)
            }
        }
        this.refreshUserTrain()
    }



    // changeSportInTrain(name: string, index, weight) {
    //     for (let item of this.userTrain) {
    //         if (item.name.trim() === name.trim()) {
    //             item['food'][index]['weight'] = weight
    //         }
    //     }
    //     this.refreshUserTrain()
    // }

    refreshUserTrain() {
        this._storageService.setItem(this.storageKeys.userTrain, this.userTrain);
    }

}

export interface Sport {
    name: Object;
    custom: boolean;
    calories: number;
}
export interface Train {
    name: string;
    sport: Array<Sport>;
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
            "en": "barbell back squat",
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
        "calories": 0
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
    },
    {
        "name": {
            "en": "bent-over barbell row",
            "ru": "тяга штанги к животу"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "standing t-bar row",
            "ru": "тяга т-грифа"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "wide-grip seated cable row",
            "ru": "тяга к животу в тренажере"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "pull-down",
            "ru": "тяга сверху"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "single-arm dumbbell row",
            "ru": "тяга гантели в наклоне"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "pull-over",
            "ru": "пуловер"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "barbell curl",
            "ru": "подъем штанги на бицепс"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "incline dumbbell curl",
            "ru": "подъем гантелей на бицепс сидя"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "standing biceps cable curl",
            "ru": "тяга снизу на бицепс в тренажере"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "reverse grip bent-over rows",
            "ru": "тяга штанги к животу обратным хватом"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "concentration curls",
            "ru": "концентрированные сгибания рук с гантелей на бицепс"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "flat-bench dumbbell press",
            "ru": "жим гантелей лежа"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "low-incline barbell bench press",
            "ru": "жим лежа на наклонной скамье(положительной)"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "cable crossover",
            "ru": "кроссовер"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "seated machine chest press",
            "ru": "жим в хаммере"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "incline dumbbell press",
            "ru": "жим гантелей на наклонной скамье(положительной)"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "bar dip",
            "ru": "брусья"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "pec-deck machine",
            "ru": "бабочка на грудь"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "flat dumbbell fly",
            "ru": "разводка гантелей на грудь"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "front squats",
            "ru": "фронтальный присед"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "squats with dumbbells",
            "ru": "присед с гантелями"
        },
        "custom": false,
        "calories": 0
    },
    {
        "name": {
            "en": "dumbbell lunges ",
            "ru": "выпады с гантелями"
        },
        "custom": false,
        "calories": 0
    }
]
