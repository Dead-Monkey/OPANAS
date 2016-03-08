import {Injectable} from 'angular2/core';

@Injectable()

export class StorageService {
    setItem(name: string, item: any) {
        localStorage.setItem(name, JSON.stringify(item));
        console.log(`set ${name} :: size is ${localStorage.getItem(name).length/1000} KB`);
    }

    getItem(name: string): any {
        if (localStorage.getItem(name)) {
            console.log(`get ${name} :: size is ${localStorage.getItem(name).length/1000} KB`);
        }
        return JSON.parse(localStorage.getItem(name));
    }

    removeItem(name:string){
      localStorage.removeItem(name);
    }
}
