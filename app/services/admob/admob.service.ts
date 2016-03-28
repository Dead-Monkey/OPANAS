import {Injectable} from 'angular2/core';

@Injectable()

export class AdMobService {
    private admobidFirst = {};

    constructor() {

    }
    createBottomBanerFirst() {
      if (/(android)/i.test(navigator.userAgent)) { // for android & amazon-fireos
          this.admobidFirst = {
              banner: 'ca-app-pub-1213024579337881/6216360857' // or DFP format "/6253334/dfp_example_ad"
          };
      } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
          this.admobidFirst = {
              banner: 'ca-app-pub-1213024579337881/6216360857' // or DFP format "/6253334/dfp_example_ad"
          };
      } else { // for windows phone
          this.admobidFirst = {
              banner: 'ca-app-pub-1213024579337881/6216360857' // or DFP format "/6253334/dfp_example_ad"
          };
      }
    }
    addBottomBanerFirst() {
        if (AdMob) AdMob.createBanner({
            adId: this.admobidFirst['banner'],
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow: true
        });
    }


}
