import {Injectable} from 'angular2/core';

@Injectable()

export class StorageService {
    setItem(name: string, item: any) {
        localStorage.setItem(name, JSON.stringify(item));
    }

    getItem(name: string): any {
        if (localStorage.getItem(name)) {
        }
        return JSON.parse(localStorage.getItem(name));
    }

    removeItem(name:string){
      localStorage.removeItem(name);
    }
}
