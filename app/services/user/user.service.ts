import {Injectable} from 'angular2/core';
import {StorageService} from '../../shared/services/storage/storage.service';

@Injectable()

export class UserService {
    private language: string = 'ru';

    getLanguage():string {
        return this.language;
    }

    setLanguage(language:string){
      this.language = language;
    }
}
